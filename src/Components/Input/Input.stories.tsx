import Input, { Props } from './Input'
import { Meta, Story } from '@storybook/react'
import '../../index.css'
import { FiUser, FiLock } from 'react-icons/fi'
import { BiLoaderAlt } from 'react-icons/bi'
import { SiMailDotRu } from 'react-icons/si'

const icons = { FiUser, FiLock, BiLoaderAlt, SiMailDotRu }

export default {
  component: Input,
  title: 'Components/Input',
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: { type: 'select' },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <Input {...args} />

export const Primary = Template.bind({})

Primary.args = {
  placeholder: 'Enter Username',
  touched: false,
  errors: 'Username is required',
}
