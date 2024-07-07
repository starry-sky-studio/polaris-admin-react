// src/Tiptap.tsx
import { EditorProvider, FloatingMenu, BubbleMenu, useEditor, EditorContent } from '@tiptap/react'
import { Extension, RawCommands, type Command } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import BubbleMenuOperate from './BubbleMenu'
import Underline from '@tiptap/extension-underline'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import { Color } from '@tiptap/extension-color'
import History from '@tiptap/extension-history'
import Heading from '@tiptap/extension-heading'
import './styles/index.scss'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'

export const FontSize = Extension.create({
  name: 'fontSize',

  addOptions() {
    return {
      types: ['textStyle']
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => element.style.fontSize.replace(/['"]+/g, ''),
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {}
              }

              return {
                style: `font-size: ${attributes.fontSize}`
              }
            }
          }
        }
      }
    ]
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize: string) =>
        ({ chain }: any) => {
          return chain().setMark('textStyle', { fontSize }).run()
        }
    } as Partial<RawCommands>
  }
})

const testText = `
<p>Hey, try to select some text her<span style="color: #ab1a3c">e. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.</span></p>
`

const Tiptap = () => {
  const [htmlValue, setHtmlValue] = useState(testText)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontFamily,
      Color,
      // History
      Heading.configure({
        levels: [1, 2, 3]
      }),
      FontSize,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Highlight.configure({ multicolor: true })
    ],
    content: htmlValue,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none'
      },
      transformPastedText(text) {
        console.log('transformPastedText', text)
        return text.toUpperCase()
      }
    },

    onUpdate: ({ editor }) => {
      // editor.commands.clearContent()
      console.log('内容已更改:', editor.getHTML())
      // if (editor.getHTML() === '<p></p>') {
      //   editor.commands.clearContent()
      // }
      if (editor.getHTML() === '<p></p>') {
        editor.destroy()
      }
    }
  })

  const [isEditable, setIsEditable] = useState(true)

  const typeWriter = (text: string) => {
    setIsEditable(false)

    let index = 0
    const intervalId = setInterval(() => {
      if (index < text.length) {
        const newText = text.slice(0, index + 1)
        setHtmlValue(newText)

        editor?.commands.setContent(newText)
        index++
      } else {
        clearInterval(intervalId)
        setIsEditable(true)
      }
    }, 10)
  }

  useEffect(() => {
    console.log('editor', editor)
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  return (
    <div className="border-2 p-4 min-h-2 min-w-2">
      <Button>
        <button onClick={() => typeWriter(testText)}>TypeWriter</button>
      </Button>
      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={isEditable}
            onChange={() => setIsEditable(!isEditable)}
          />
          Editable
        </label>
      </div>
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
        >
          <BubbleMenuOperate editor={editor} />
        </BubbleMenu>
      )}
      <EditorContent
        editor={editor}
        className="bg-red-100"
      />

      {/* </EditorProvider> */}
    </div>
  )
}

export default Tiptap
