import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const OnScreenComponent = () => {
  const headerTwoRef = useRef<HTMLHeadingElement>(null);
  const isVisible = useOnScreen(headerTwoRef, -100);

  console.log('-****- isVisible', isVisible);


  return (
    <div>
      <h1>Header</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nibh, efficitur non porttitor eget,
        pellentesque non ipsum. Aliquam luctus nibh sed dui accumsan eleifend. Aenean ullamcorper bibendum nulla quis
        lobortis. In hac habitasse platea dictumst. Curabitur eu fringilla erat. Integer non dui nibh. Nam rhoncus
        blandit nulla ac sollicitudin. Morbi bibendum tortor ac diam facilisis, nec vehicula erat hendrerit. Mauris
        pharetra ornare orci, condimentum ultrices magna feugiat nec. Aliquam eget elementum metus. Vivamus eleifend
        ornare ligula, non rutrum augue mattis eget. Praesent rutrum sem sed odio viverra, et scelerisque lorem ornare.
        Sed pretium tellus ut pellentesque cursus. Morbi ut leo mollis, iaculis est molestie, placerat mauris. Nulla
        condimentum leo at tellus fringilla tristique. Nulla laoreet urna felis, ac aliquet libero viverra congue. In
        dictum pretium porttitor. Sed ac ipsum suscipit, maximus nisi quis, interdum mauris. Maecenas tempus justo leo,
        vitae porttitor risus convallis ac. Fusce dolor dui, auctor ut condimentum id, consequat ullamcorper justo.
        Aenean ultrices lorem pellentesque, imperdiet mi id, convallis est. Morbi ut porta sapien, sed lacinia nisi.
        Vestibulum eget massa placerat, venenatis magna vel, tincidunt odio. Nam at nisi nisl. Maecenas quis urna justo.
        Cras volutpat placerat aliquet. Quisque quis lectus fringilla dolor dignissim congue. Etiam eget hendrerit eros.
        Phasellus ac nunc eget tellus pellentesque molestie ac quis metus. Praesent ac ultricies diam. Maecenas
        condimentum maximus sollicitudin. Duis suscipit ex ut mauris tempus, et porttitor velit ultrices. Pellentesque
        lobortis magna neque, ut pulvinar mi auctor at. Nunc semper ac est sit amet dapibus. Aenean iaculis dignissim
        sem ac molestie. Sed auctor ultrices magna, sit amet maximus nunc porttitor id. Sed tempor, lectus eu luctus
        luctus, dolor augue varius diam, sed consectetur lectus justo non tellus. Vivamus malesuada sapien et pretium
        malesuada. Aenean cursus est ut risus feugiat semper. Duis suscipit ex ut mauris tempus, et porttitor velit
        ultrices. Pellentesque lobortis magna neque, ut pulvinar mi auctor at. Nunc semper ac est sit amet dapibus.
        Aenean iaculis dignissim sem ac molestie. Sed auctor ultrices magna, sit amet maximus nunc porttitor id. Sed
        tempor, lectus eu luctus luctus, dolor augue varius diam, sed consectetur lectus justo non tellus. Vivamus
        malesuada sapien et pretium malesuada. Aenean cursus est ut risus feugiat semper.
      </div>
      <h1 ref={headerTwoRef}>Header 2 {isVisible && 'Is visible'}</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nibh, efficitur non porttitor eget,
        pellentesque non ipsum. Aliquam luctus nibh sed dui accumsan eleifend. Aenean ullamcorper bibendum nulla quis
        lobortis. In hac habitasse platea dictumst. Curabitur eu fringilla erat. Integer non dui nibh. Nam rhoncus
        blandit nulla ac sollicitudin. Morbi bibendum tortor ac diam facilisis, nec vehicula erat hendrerit. Mauris
        pharetra ornare orci, condimentum ultrices magna feugiat nec. Aliquam eget elementum metus. Vivamus eleifend
        ornare ligula, non rutrum augue mattis eget. Praesent rutrum sem sed odio viverra, et scelerisque lorem ornare.
        Sed pretium tellus ut pellentesque cursus. Morbi ut leo mollis, iaculis est molestie, placerat mauris. Nulla
        condimentum leo at tellus fringilla tristique. Nulla laoreet urna felis, ac aliquet libero viverra congue. In
        dictum pretium porttitor. Sed ac ipsum suscipit, maximus nisi quis, interdum mauris. Maecenas tempus justo leo,
        vitae porttitor risus convallis ac. Fusce dolor dui, auctor ut condimentum id, consequat ullamcorper justo.
        Aenean ultrices lorem pellentesque, imperdiet mi id, convallis est. Morbi ut porta sapien, sed lacinia nisi.
        Vestibulum eget massa placerat, venenatis magna vel, tincidunt odio. Nam at nisi nisl. Maecenas quis urna justo.
        Cras volutpat placerat aliquet. Quisque quis lectus fringilla dolor dignissim congue. Etiam eget hendrerit eros.
        Phasellus ac nunc eget tellus pellentesque molestie ac quis metus. Praesent ac ultricies diam. Maecenas
        condimentum maximus sollicitudin. Duis suscipit ex ut mauris tempus, et porttitor velit ultrices. Pellentesque
        lobortis magna neque, ut pulvinar mi auctor at. Nunc semper ac est sit amet dapibus. Aenean iaculis dignissim
        sem ac molestie. Sed auctor ultrices magna, sit amet maximus nunc porttitor id. Sed tempor, lectus eu luctus
        luctus, dolor augue varius diam, sed consectetur lectus justo non tellus. Vivamus malesuada sapien et pretium
        malesuada. Aenean cursus est ut risus feugiat semper. Duis suscipit ex ut mauris tempus, et porttitor velit
        ultrices. Pellentesque lobortis magna neque, ut pulvinar mi auctor at. Nunc semper ac est sit amet dapibus.
        Aenean iaculis dignissim sem ac molestie. Sed auctor ultrices magna, sit amet maximus nunc porttitor id. Sed
        tempor, lectus eu luctus luctus, dolor augue varius diam, sed consectetur lectus justo non tellus. Vivamus
        malesuada sapien et pretium malesuada. Aenean cursus est ut risus feugiat semper.
      </div>
    </div>
  );
};

export default OnScreenComponent;
