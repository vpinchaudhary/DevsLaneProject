import Avatar, { Props } from './Avatar'
import '../../index.css'
import { Story, Meta } from '@storybook/react'

export default {
  component: Avatar,
  title: 'Components/Avatar',
  argTypes: {
    indicator: {
      control: { type: 'radio' },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})

Primary.args = {
  image: 'https://designreset.com/cork/ltr/demo4/assets/img/profile-16.jpeg',
  name: 'Vipin Chaudhary',
  indicator: 'online',
  size: 'large',
  rounded: true,
}
