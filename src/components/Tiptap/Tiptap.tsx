// src/Tiptap.tsx
import { EditorProvider, FloatingMenu, BubbleMenu, useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import BubbleMenuOperate from './BubbleMenu'
import Underline from '@tiptap/extension-underline'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: `
      <p style="color: red">
        Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.
      </p>
    `,
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

  useEffect(() => {
    console.log('editor', editor)
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  return (
    <div className="border-2 p-4 min-h-2 min-w-2">
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
