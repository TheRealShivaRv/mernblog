import { FC } from "react";
import PostHead from "./PostHead";
import Container from "@mui/material/Container";

const dummyText = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis elit, interdum at ex sit amet, viverra aliquam dui. Phasellus sagittis ligula id diam cursus tincidunt non sit amet lectus. Fusce a sem viverra, tincidunt ipsum eget, placerat leo. Praesent tincidunt pulvinar ultrices. Fusce at fringilla purus, ut vestibulum mauris. Pellentesque dapibus dignissim velit, at pharetra eros tempor at. Proin rutrum lobortis varius. Aliquam mauris erat, tempus eu elementum et, rutrum non felis. Phasellus sed ligula posuere, ornare nibh a, consectetur mauris. Praesent rutrum, enim facilisis ultricies sodales, libero mauris scelerisque nibh, non condimentum velit ante in urna. Ut felis massa, auctor ac ex quis, porttitor varius est. Vivamus maximus vehicula enim id ultrices. Sed consequat mauris non hendrerit hendrerit. Nulla diam nibh, dignissim in eros vitae, tincidunt elementum nibh. Curabitur sit amet eros nec neque molestie gravida eu at lectus.

Nulla fringilla velit eget enim ultricies cursus. Nunc auctor cursus nisl non viverra. Donec pretium vestibulum ligula efficitur cursus. Phasellus non pharetra elit, et luctus nisl. Etiam vitae nibh euismod, feugiat tellus sit amet, accumsan magna. Phasellus efficitur ligula quis dapibus sodales. Suspendisse rhoncus justo vel mi congue tincidunt. Sed felis magna, maximus non rhoncus in, feugiat nec nisi.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque laoreet nibh eget ullamcorper elementum. Nulla facilisi. Praesent sapien tortor, faucibus eget nisi sed, consequat fringilla ante. Ut vehicula volutpat ligula, vitae posuere lorem laoreet vel. In et justo gravida, dictum urna ac, consectetur ligula. Morbi volutpat sollicitudin diam, eget feugiat ante mollis nec. Aliquam erat volutpat. Nulla ullamcorper nisl at laoreet mollis.

Proin venenatis ligula porttitor rutrum cursus. Suspendisse potenti. In rhoncus massa quis tristique varius. Aliquam eu iaculis metus, id ultrices est. In varius ultricies diam vitae tristique. Donec eget finibus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Vestibulum luctus bibendum sem sit amet finibus. Cras gravida ligula erat, a gravida augue venenatis sed. Nunc elit ante, fermentum ut semper molestie, rhoncus eu velit. Aenean lacus diam, tempor non nisl ac, dictum iaculis tellus. Aenean non commodo purus. Quisque id nunc neque. Fusce et nisl id elit pretium rutrum in at dui. Quisque semper pretium tortor a pretium. Morbi sit amet mi et lorem euismod elementum vel nec elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed imperdiet ipsum et ex lacinia pellentesque.

Aenean sit amet leo massa. In nisi nibh, faucibus at eros sed, aliquam gravida elit. Fusce sed venenatis orci. Praesent sit amet iaculis libero, non convallis turpis. Mauris luctus nisi vel est vehicula fringilla at a ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque dignissim nunc et dolor faucibus, volutpat gravida arcu ornare. Etiam tempus nisi sit amet condimentum consectetur. Etiam quis posuere nibh. Curabitur consequat interdum dui, eu ornare nunc congue et.

Sed eget volutpat massa. Nunc pellentesque ipsum tellus, eu facilisis augue luctus sit amet. Nam non lectus vitae velit eleifend pretium. Phasellus quis arcu.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis elit, interdum at ex sit amet, viverra aliquam dui. Phasellus sagittis ligula id diam cursus tincidunt non sit amet lectus. Fusce a sem viverra, tincidunt ipsum eget, placerat leo. Praesent tincidunt pulvinar ultrices. Fusce at fringilla purus, ut vestibulum mauris. Pellentesque dapibus dignissim velit, at pharetra eros tempor at. Proin rutrum lobortis varius. Aliquam mauris erat, tempus eu elementum et, rutrum non felis. Phasellus sed ligula posuere, ornare nibh a, consectetur mauris. Praesent rutrum, enim facilisis ultricies sodales, libero mauris scelerisque nibh, non condimentum velit ante in urna. Ut felis massa, auctor ac ex quis, porttitor varius est. Vivamus maximus vehicula enim id ultrices. Sed consequat mauris non hendrerit hendrerit. Nulla diam nibh, dignissim in eros vitae, tincidunt elementum nibh. Curabitur sit amet eros nec neque molestie gravida eu at lectus.

Nulla fringilla velit eget enim ultricies cursus. Nunc auctor cursus nisl non viverra. Donec pretium vestibulum ligula efficitur cursus. Phasellus non pharetra elit, et luctus nisl. Etiam vitae nibh euismod, feugiat tellus sit amet, accumsan magna. Phasellus efficitur ligula quis dapibus sodales. Suspendisse rhoncus justo vel mi congue tincidunt. Sed felis magna, maximus non rhoncus in, feugiat nec nisi.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque laoreet nibh eget ullamcorper elementum. Nulla facilisi. Praesent sapien tortor, faucibus eget nisi sed, consequat fringilla ante. Ut vehicula volutpat ligula, vitae posuere lorem laoreet vel. In et justo gravida, dictum urna ac, consectetur ligula. Morbi volutpat sollicitudin diam, eget feugiat ante mollis nec. Aliquam erat volutpat. Nulla ullamcorper nisl at laoreet mollis.

Proin venenatis ligula porttitor rutrum cursus. Suspendisse potenti. In rhoncus massa quis tristique varius. Aliquam eu iaculis metus, id ultrices est. In varius ultricies diam vitae tristique. Donec eget finibus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Vestibulum luctus bibendum sem sit amet finibus. Cras gravida ligula erat, a gravida augue venenatis sed. Nunc elit ante, fermentum ut semper molestie, rhoncus eu velit. Aenean lacus diam, tempor non nisl ac, dictum iaculis tellus. Aenean non commodo purus. Quisque id nunc neque. Fusce et nisl id elit pretium rutrum in at dui. Quisque semper pretium tortor a pretium. Morbi sit amet mi et lorem euismod elementum vel nec elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed imperdiet ipsum et ex lacinia pellentesque.

Aenean sit amet leo massa. In nisi nibh, faucibus at eros sed, aliquam gravida elit. Fusce sed venenatis orci. Praesent sit amet iaculis libero, non convallis turpis. Mauris luctus nisi vel est vehicula fringilla at a ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque dignissim nunc et dolor faucibus, volutpat gravida arcu ornare. Etiam tempus nisi sit amet condimentum consectetur. Etiam quis posuere nibh. Curabitur consequat interdum dui, eu ornare nunc congue et.

Sed eget volutpat massa. Nunc pellentesque ipsum tellus, eu facilisis augue luctus sit amet. Nam non lectus vitae velit eleifend pretium. Phasellus quis arcu.
`;

export const Post: FC = () => {
  return (
    <Container maxWidth="lg">
      <PostHead />
      <hr />
      <p>{dummyText}</p>
    </Container>
  );
};
