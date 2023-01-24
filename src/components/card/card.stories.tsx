import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from ".";

export default {
  title: "Example/Card",
  args: {
    imageURL: "https://www.w3schools.com/w3css/img_snowtops.jpg",
    title: "danidinha",
    content: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet
        lorem vitae justo semper mattis. Aliquam blandit dignissim lorem, eu
        laoreet dolor accumsan vitae. Aenean elementum, felis a placerat
        posuere, ligula ex sollicitudin velit, vel elementum odio leo ac ante.
        Phasellus ac vestibulum nibh. Aenean ligula quam, congue in massa
        sollicitudin, porttitor auctor diam. Fusce porttitor dictum vulputate.
        Donec facilisis, felis at porttitor pulvinar, dui eros molestie tellus,
        sed sollicitudin elit lectus id leo. Curabitur ornare sit amet ligula et
        mollis. Pellentesque ullamcorper, nisi vitae ultricies consectetur,
        risus orci dictum urna, a aliquam nunc sapien a eros. In id dolor
        elementum sapien ornare aliquam. Ut faucibus tellus ac lorem tristique,
        eu commodo ante dignissim. Maecenas scelerisque sem neque, et ultrices
        ligula scelerisque et. Nam placerat malesuada varius. Fusce malesuada
        tempus purus, eget commodo eros. Curabitur non sapien eu tortor finibus
        scelerisque. Aliquam et justo sed ante dapibus convallis. Ut sed maximus
        nisi, eget auctor mauris. In eget tortor finibus, interdum nibh sit
        amet, sollicitudin erat. Maecenas sapien lectus, aliquam in lectus eget,
        feugiat vulputate urna. Sed faucibus lorem a orci suscipit lobortis. In
        nec vulputate felis. Aliquam venenatis egestas dolor id commodo. Etiam
        ac ex mi. Praesent quis tellus tincidunt, faucibus enim at, dictum
        lorem. Nulla interdum ligula elit, nec tempor dui viverra et. Nulla arcu
        ex, maximus sit amet urna at, feugiat volutpat enim. Morbi nec nibh
        semper, viverra sem non, euismod nulla. Donec feugiat suscipit
        efficitur. Curabitur eleifend lobortis sem eget efficitur. Proin in
        condimentum massa, et maximus lectus. Aliquam purus justo, ornare non
        diam et, pretium placerat orci. Donec sem lacus, interdum eu lacus non,
        tristique fermentum libero. Fusce dolor elit, pellentesque sed eleifend
        fringilla, lacinia a lectus. Curabitur condimentum ante sed ex luctus,
        quis commodo dolor gravida. Suspendisse congue sem felis, eget
        scelerisque mi dapibus scelerisque. Quisque luctus, dolor quis facilisis
        convallis, tortor orci laoreet dui, non imperdiet enim nibh vitae neque.
        Donec cursus eleifend lorem, eu efficitur augue pulvinar eu. Aenean
        feugiat nibh vel ipsum convallis hendrerit. Aenean at enim porttitor,
        pharetra nisi et, gravida erat. Cras vulputate ornare libero vel
        lobortis. Curabitur nec quam id magna facilisis porta interdum ac
        ligula. Vestibulum pulvinar ante augue, sit amet aliquam turpis volutpat
        nec. Integer rhoncus dictum est et aliquam. Integer sed vestibulum
        sapien. Sed eu quam nibh. Phasellus luctus purus orci, sagittis pretium
        felis cursus id. Nulla eget tortor vitae massa pulvinar convallis.
        Pellentesque nec tortor dui. Vivamus sed augue urna. Ut in euismod
        lacus. Vivamus at ex molestie, fermentum magna in, eleifend elit.
        Vivamus tincidunt sed tortor sit amet mattis. Nulla placerat est ac nunc
        aliquet, malesuada accumsan ligula efficitur. Duis justo metus,
        fringilla eu pulvinar vitae, pharetra sed ex. Duis mattis, orci nec
        efficitur bibendum, leo arcu ornare mauris, ut aliquet nisi enim ac est.
        Fusce a interdum erat. Integer efficitur justo in neque porttitor
        malesuada vulputate in lacus. Aliquam non tortor id odio semper
        consectetur commodo at mauris. Duis gravida urna at enim pretium
        euismod. Suspendisse vitae dolor nec est consequat dapibus. Mauris eu
        metus eu sapien congue aliquam blandit ac enim. Nam enim turpis,
        efficitur viverra ornare nec, ornare et justo. Cras arcu magna, pretium
        id scelerisque nec, mollis eget urna. Nullam fringilla sem porta massa
        pellentesque, sed blandit lectus luctus.
      </>
    ),
  },
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);
