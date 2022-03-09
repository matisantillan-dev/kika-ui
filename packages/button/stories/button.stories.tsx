import React from "react"
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import { Button } from "../src/button"

export default {
  title: "Button",
  decorators: [
    (Story: any) => (
      <div style={{ marginTop: "40px" }}>
        <Story />
      </div>
    ),
  ],
}

export const Basic = () => (

  <>
    <Button color={"#3866a3"}>
      Click me!
    </Button>

    <Button color={"#7928ca"}>
    Click me!
    </Button>

    <Button color={"#17c964"}>
      Click me!
    </Button>

    <Button color={"#f5a623"}>
      Click me!
    </Button>

    <Button color={"#f21361"}>
      Click me!
    </Button>
  </>

  
)
  //const _size = select('Size', { Small: 'small', Large: 'large' }, 'small');

