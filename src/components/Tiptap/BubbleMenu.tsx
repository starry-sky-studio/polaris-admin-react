import { Editor } from '@tiptap/react'
import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  BoldOutlined,
  DownOutlined,
  FontColorsOutlined,
  FontSizeOutlined,
  HighlightOutlined,
  ItalicOutlined,
  RedoOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
  UndoOutlined
} from '@ant-design/icons'
import OperateIcon from './components/OperateIcon'
import { ColorPicker, Dropdown, MenuProps, Space } from 'antd'
import { Color } from 'antd/es/color-picker'

interface BubbleMenuProps {
  editor: Editor
}

const BubbleMenuOperate = ({ editor }: BubbleMenuProps) => {
  const items: MenuProps['items'] = [
    {
      key: 'H1',
      label: (
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1 标题
        </button>
      )
    },
    {
      key: 'H2',
      label: (
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2 标题
        </button>
      )
    },
    {
      key: 'H3',
      label: (
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3 标题
        </button>
      )
    },
    {
      key: 'P',
      label: (
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          P 段落
        </button>
      )
    }
  ]

  const itemsFontSize: MenuProps['items'] = [
    {
      key: '14',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('14px').run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          14
        </button>
      )
    },
    {
      key: '16',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('16px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          16
        </button>
      )
    },
    {
      key: '18',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('18px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          18
        </button>
      )
    },
    {
      key: '20',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('20px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          20
        </button>
      )
    },
    {
      key: '22',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('22px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          22
        </button>
      )
    },
    {
      key: '24',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('24px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          24
        </button>
      )
    },
    {
      key: '26',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('26px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          26
        </button>
      )
    },
    {
      key: '28',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('28px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          28
        </button>
      )
    },
    {
      key: '30',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('30px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          30
        </button>
      )
    },
    {
      key: '32',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('32px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          32
        </button>
      )
    },
    {
      key: '34',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('34px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          34
        </button>
      )
    },
    {
      key: '36',
      label: (
        <button
          onClick={() => editor.chain().focus().setFontSize('36px').run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          36
        </button>
      )
    }
  ]

  const itemsTextAlign: MenuProps['items'] = [
    {
      key: 'center',
      label: (
        <AlignCenterOutlined
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
        />
      )
    },
    {
      key: 'left',
      label: (
        <AlignLeftOutlined
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        />
      )
    },
    {
      key: 'right',
      label: (
        <AlignLeftOutlined
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        />
      )
    }
  ]

  return (
    <div className="p-2 bg-gray-50 w-[380px]  border flex gap-2 justify-center items-center rounded-lg">
      <Dropdown
        menu={{ items }}
        className="!z-[10000]"
      >
        <Space>
          标题
          <DownOutlined />
        </Space>
      </Dropdown>
      <Dropdown
        menu={{ items: itemsFontSize }}
        className="px-1"
      >
        <Space>
          <FontSizeOutlined className="text-lg" />
          <DownOutlined />
        </Space>
      </Dropdown>
      <OperateIcon>
        <ColorPicker
          trigger="click"
          className="z-50"
          onChange={(_value: Color, hex: string) => editor.chain().focus().setColor(hex).run()}
        >
          <FontColorsOutlined />
        </ColorPicker>
      </OperateIcon>

      <OperateIcon>
        <ColorPicker
          trigger="click"
          onChange={(_value: Color, hex: string) =>
            editor.chain().focus().toggleHighlight({ color: hex }).run()
          }
          className={editor.isActive('highlight', { color: '#ffc078' }) ? 'is-active' : ''}
        >
          <HighlightOutlined />
        </ColorPicker>
      </OperateIcon>

      <OperateIcon>
        <BoldOutlined
          className={editor.isActive('bold') ? 'text-violet-300' : ''}
          onClick={() => editor.chain().focus().toggleBold().run()}
        />
      </OperateIcon>
      <OperateIcon>
        <ItalicOutlined
          className={editor.isActive('italic') ? 'text-violet-300' : ''}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />
      </OperateIcon>
      <OperateIcon>
        <StrikethroughOutlined
          className={editor.isActive('strike') ? 'text-violet-300' : ''}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        />
      </OperateIcon>
      <OperateIcon>
        <UnderlineOutlined
          className={editor.isActive('underline') ? 'text-violet-300' : ''}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        />
      </OperateIcon>

      <OperateIcon>
        <UndoOutlined
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        />
      </OperateIcon>
      <OperateIcon>
        <RedoOutlined
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        />
      </OperateIcon>
      <Dropdown
        menu={{ items: itemsTextAlign }}
        className="px-1"
      >
        <Space>
          <AlignLeftOutlined className="text-lg" />
          <DownOutlined />
        </Space>
      </Dropdown>
    </div>
  )
}

export default BubbleMenuOperate
