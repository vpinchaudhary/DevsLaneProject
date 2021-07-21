import '../../index.css'
import { Story, Meta } from '@storybook/react'
import Alerts, { Props } from './Alerts'

export default {
  component: Alerts,
  title: 'Components/Alerts',
  argTypes: {
    theme: {
      control: 'select',
    },
  },
} as Meta

const Template: Story<Props> = (args) => <Alerts {...args} />

export const Primary = Template.bind({})

Primary.args = {
  outline: false,
  theme: 'primary',
  title: 'Primary!',
  message: 'This is a primary alert.',
}
