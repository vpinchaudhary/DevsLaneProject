import Button, { Props } from './Button'
import { Story, Meta } from '@storybook/react'
import '../../index.css'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    theme: {
      control: { type: 'select' },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'Primary',
  type: 'submit',
  outline: false,
  theme: 'warning',
  rounded: false,
}
