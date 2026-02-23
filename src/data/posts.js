export const posts = [
  {
    id: 'post-01',
    slug: 'spider-man',
    title: 'Analysis of science-fiction shows in the 1990s',
    author: 'Nicolas Garlinski',
    date: 'Jan 15, 2025 at 5:00 PM',
    navLabel: 'Spider-Man',
    isNew: true,
    images: [
      {
        src: 'https://res.cloudinary.com/dfog0e294/image/upload/v1547130131/webdev/Blog/spider-post-01.png',
        alt: 'Space Stations and Style: A Look at the Designs of Babylon 5 and DS9',
      },
      {
        src: 'https://res.cloudinary.com/dfog0e294/image/upload/v1547130606/webdev/Blog/spider-post-02.png',
        alt: 'Lego Spider-Man',
      },
      {
        src: 'https://res.cloudinary.com/dfog0e294/image/upload/v1547130607/webdev/Blog/spider-post-03.png',
        alt: 'Lego Spider-Man',
      },
    ],
    content: [
      {
        type: 'lead',
        text: `*Babylon 5* and *Star Trek: Deep Space Nine (DS9)* have distinct approaches to set and character design, reflecting
their differing tones and settings. *Babylon 5* is known for its more industrial and utilitarian aesthetic. The space
station itself is a massive, angular structure that emphasizes a gritty, lived-in feel, with darker lighting and
minimalistic sets. This reflects the show's focus on political intrigue and the complex, often harsh realities of
interstellar diplomacy and war. The characters on *Babylon 5* are often dressed in more practical, militaristic
uniforms, with an emphasis on realism rather than idealized futuristic fashion. In contrast, *DS9* features a more
polished, brighter design, with its space station, Deep Space Nine, having a more expansive, intricate, and somewhat
alien look due to its Bajoran origins. The interiors are rich in color and detail, with more emphasis on luxury and
comfort, reflecting the station's role as a hub for trade and diplomacy. Character design in *DS9* incorporates more
diverse alien species with distinctive makeup and costumes, blending the Star Trek tradition of exploring diverse
cultures with the unique challenges of the Bajoran and Dominion conflicts. Overall, *Babylon 5* leans toward a more
somber and realistic aesthetic, while *DS9* embraces a blend of visual opulence and classic Star Trek optimism.`,
      },
      { type: 'image', index: 1 },
      {
        type: 'text',
        text: `Vestibulum vehicula quam id quam lobortis convallis. Nullam quis pulvinar dolor. Pellentesque semper bibendum facilisis. Ut vitae interdum tortor. Etiam mattis dui ut dui pharetra, ac auctor ligula rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus leo, scelerisque id commodo sed, feugiat at mi. Donec quis ex justo.`,
      },
      {
        type: 'blockquote',
        text: `Nam nec lectus in nulla interdum ultrices mollis id dui. Duis sed sapien eu felis elementum scelerisque at ac nibh. Pellentesque vehicula sed turpis eget pellentesque. Phasellus ut sapien hendrerit, egestas diam ac, placerat felis. Vivamus pharetra odio quis placerat pulvinar.`,
        footer: 'Someone in Gotham',
      },
      { type: 'image', index: 2 },
      {
        type: 'text',
        text: `In hac habitasse platea dictumst. Curabitur vulputate, nunc sed tempus vehicula, turpis urna mattis augue, sed lobortis urna magna id libero. Nam eget erat mattis, molestie lorem id, pharetra nisl. Suspendisse facilisis odio volutpat, porta dui in, sollicitudin augue. Integer id nisl ac neque pretium sollicitudin. In nibh lorem, faucibus ut mattis et, lacinia in ante. Nunc turpis elit, pellentesque at vestibulum a, dignissim non felis. Nullam vitae facilisis ex. Aenean ut volutpat quam.`,
      },
    ],
  },
  {
    id: 'post-02',
    slug: 'batman',
    title: 'Batman Adventures',
    author: 'Nicolas Garlinski',
    date: 'May 27, 2023 at 10:30 PM',
    navLabel: 'Batman',
    isNew: false,
    images: [
      {
        src: 'https://res.cloudinary.com/dfog0e294/image/upload/v1547130130/webdev/Blog/batman-post-01.jpg',
        alt: 'Lego Batman',
      },
      {
        src: 'https://res.cloudinary.com/dfog0e294/image/upload/v1547468714/webdev/Blog/batman-post-02.jpg',
        alt: 'Lego Batman',
      },
    ],
    content: [
      {
        type: 'lead',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis sollicitudin nisl non dignissim. Phasellus hendrerit nisl et massa cursus suscipit. Donec pulvinar diam dolor, sit amet vestibulum purus faucibus posuere. Proin a nunc et felis aliquam sodales. Suspendisse dapibus ex a nulla faucibus, id venenatis risus facilisis. Nullam non aliquet odio. Phasellus et neque feugiat nunc auctor pretium eu quis magna. Praesent mattis metus vitae ornare hendrerit. Maecenas hendrerit nibh id commodo rhoncus.`,
      },
      {
        type: 'text',
        text: `Vestibulum vehicula quam id quam lobortis convallis. Nullam quis pulvinar dolor. Pellentesque semper bibendum facilisis. Ut vitae interdum tortor. Etiam mattis dui ut dui pharetra, ac auctor ligula rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus leo, scelerisque id commodo sed, feugiat at mi. Donec quis ex justo.`,
      },
      {
        type: 'text',
        text: `In dictum ex orci, vitae ultricies ipsum sagittis et. Nam in risus non mauris dictum consequat ac vitae nisl. Vestibulum sed mauris gravida, rhoncus augue eget, finibus libero. Vivamus vel quam congue, vehicula elit eu, congue nulla. Cras at dui sit amet nibh pharetra aliquam. Morbi rhoncus metus metus, eget tincidunt libero mollis at.`,
      },
      {
        type: 'blockquote',
        text: `Nam nec lectus in nulla interdum ultrices mollis id dui. Duis sed sapien eu felis elementum scelerisque at ac nibh. Pellentesque vehicula sed turpis eget pellentesque.`,
        footer: 'Someone in Gotham',
      },
      { type: 'image', index: 1 },
      {
        type: 'text',
        text: `In hac habitasse platea dictumst. Curabitur vulputate, nunc sed tempus vehicula, turpis urna mattis augue, sed lobortis urna magna id libero. Nam eget erat mattis, molestie lorem id, pharetra nisl. Suspendisse facilisis odio volutpat, porta dui in, sollicitudin augue.`,
      },
    ],
  },
  {
    id: 'post-03',
    slug: 'panther',
    title: 'Black Panther Adventures',
    author: 'Nicolas Garlinski',
    date: 'May 29, 2023 at 10:00 AM',
    navLabel: 'Panther',
    isNew: false,
    images: [
      {
        src: 'https://res.cloudinary.com/dfog0e294/image/upload/v1547131038/webdev/Blog/panther-post-01.png',
        alt: 'Lego Panther',
      },
      {
        src: 'https://res.cloudinary.com/dfog0e294/image/upload/v1547469074/webdev/Blog/panther-post-02.jpg',
        alt: 'Lego Panther',
      },
    ],
    content: [
      {
        type: 'lead',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis sollicitudin nisl non dignissim. Phasellus hendrerit nisl et massa cursus suscipit. Donec pulvinar diam dolor, sit amet vestibulum purus faucibus posuere. Proin a nunc et felis aliquam sodales.`,
      },
      {
        type: 'text',
        text: `Vestibulum vehicula quam id quam lobortis convallis. Nullam quis pulvinar dolor. Pellentesque semper bibendum facilisis. Ut vitae interdum tortor. Etiam mattis dui ut dui pharetra, ac auctor ligula rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      },
      { type: 'image', index: 1 },
      {
        type: 'text',
        text: `In dictum ex orci, vitae ultricies ipsum sagittis et. Nam in risus non mauris dictum consequat ac vitae nisl. Vestibulum sed mauris gravida, rhoncus augue eget, finibus libero. Vivamus vel quam congue, vehicula elit eu, congue nulla.`,
      },
      {
        type: 'blockquote',
        text: `Nam nec lectus in nulla interdum ultrices mollis id dui. Duis sed sapien eu felis elementum scelerisque at ac nibh. Pellentesque vehicula sed turpis eget pellentesque.`,
        footer: 'Someone in Gotham',
      },
      {
        type: 'text',
        text: `In hac habitasse platea dictumst. Curabitur vulputate, nunc sed tempus vehicula, turpis urna mattis augue, sed lobortis urna magna id libero. Nam eget erat mattis, molestie lorem id, pharetra nisl. Suspendisse facilisis odio volutpat, porta dui in, sollicitudin augue.`,
      },
    ],
  },
]
