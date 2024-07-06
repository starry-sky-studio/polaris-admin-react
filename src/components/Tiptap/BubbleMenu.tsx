import { Editor } from '@tiptap/react'
import {
  BoldOutlined,
  FontColorsOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  UnderlineOutlined
} from '@ant-design/icons'
import OperateIcon from './components/OperateIcon'

interface BubbleMenuProps {
  editor: Editor
}

const BubbleMenuOperate = ({ editor }: BubbleMenuProps) => {
  return (
    <div className="p-2 bg-gray-50 border flex gap-2 rounded-lg">
      <OperateIcon
        editor={editor}
        type="bold"
        onclick={() => editor.chain().focus().toggleBold().run()}
      >
        <FontColorsOutlined />
      </OperateIcon>

      <OperateIcon
        editor={editor}
        type="bold"
        onclick={() => editor.chain().focus().toggleBold().run()}
      >
        <BoldOutlined />
      </OperateIcon>
      <OperateIcon
        editor={editor}
        type="italic"
        onclick={() => editor.chain().focus().toggleItalic().run()}
      >
        <ItalicOutlined />
      </OperateIcon>
      <OperateIcon
        editor={editor}
        type="strike"
        onclick={() => editor.chain().focus().toggleStrike().run()}
      >
        <StrikethroughOutlined />
      </OperateIcon>
      <OperateIcon
        editor={editor}
        type="underline"
        onclick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <UnderlineOutlined />
      </OperateIcon>
    </div>
  )
}

export default BubbleMenuOperate
