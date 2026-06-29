// ============================================================
//  🎨 DATA.TS — Chỉnh sửa nội dung portfolio của bạn tại đây
// ============================================================

export const PERSONAL = {
  name: 'MINH',           // Tên hiển thị lớn ở hero
  title: 'Frontend & Java Developer',
  heroDesc: 'a frontend & java developer crafting beautiful interfaces and solid backends',
  aboutText:
    'Xin chào! Mình là Trần Minh, sinh viên ngành Công nghệ Thông tin và đang theo học tại Học Viện Công Nghệ Bưu Chính Viễn Thông, quê ở Thanh Hóa. Mình có niềm đam mê với lập trình, đặc biệt là phát triển ứng dụng web. Mình luôn sẵn sàng học hỏi, khám phá các công nghệ mới và không ngừng hoàn thiện kỹ năng để tạo ra những sản phẩm chất lượng. Đây là nơi mình chia sẻ các dự án, thành tựu và hành trình phát triển của bản thân.',
  email: 'Yugynt1689@gmail.com',
  github: 'https://github.com/minhtran1615',
  instagram: 'https://www.instagram.com/tranmingg/',
  facebook: 'https://www.facebook.com/kum.minh.750',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    num: '01',
    name: 'Frontend Development',
    desc: 'Xây dựng giao diện người dùng hiện đại, responsive với React, TypeScript và Tailwind CSS — đảm bảo trải nghiệm mượt mà trên mọi thiết bị.',
  },
  {
    num: '02',
    name: 'Backend Development',
    desc: 'Phát triển API RESTful và logic nghiệp vụ với Java và Spring Boot, đảm bảo hiệu suất, bảo mật và khả năng mở rộng.',
  },
  {
    num: '03',
    name: 'Responsive UI Design',
    desc: 'Thiết kế và implement layout đẹp, đúng pixel — từ mobile đến desktop — với sự chú ý kỹ lưỡng về typography và white space.',
  },
  {
    num: '04',
    name: 'Database Design',
    desc: 'Thiết kế schema MySQL tối ưu, viết query hiệu quả và đảm bảo tính toàn vẹn dữ liệu cho các ứng dụng web thực tế.',
  },
  {
    num: '05',
    name: 'Full-Stack Integration',
    desc: 'Kết nối frontend và backend thành một hệ thống liền mạch — từ xác thực người dùng đến xử lý dữ liệu real-time.',
  },
]

export const PROJECTS = [
  {
    num: '01',
    category: 'Full Stack',
    name: 'Hệ Thống Thuê Truyện',
    liveUrl: 'https://github.com/minhtran1615/cuahangchothuetruyen.git',  // Thay bằng URL thật
    images: {
      col1: [
        'https://github.com/minhtran1615/newduan/blob/main/Screenshot%20(142).png?raw=true',
        'https://github.com/minhtran1615/newduan/blob/main/Screenshot%20(143).png?raw=true',
      ],
      col2: 'https://github.com/minhtran1615/newduan/blob/main/Screenshot%20(148).png?raw=true',
    },
  },
  // {
  //   num: '02',
  //   category: 'Full Stack',
  //   name: 'Website Nhà Thuốc',
  //   liveUrl: '#',
  //   images: {
  //     col1: [
  //       'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
  //       'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
  //     ],
  //     col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  //   },
  // },
  // {
  //   num: '03',
  //   category: 'Frontend',
  //   name: 'Website Cửa Hàng Hoa',
  //   liveUrl: '#',
  //   images: {
  //     col1: [
  //       'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
  //       'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
  //     ],
  //     col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  //   },
  // },
]

// GIF images for the scrolling marquee section
export const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

// Portrait image — thay bằng ảnh của bạn
export const PORTRAIT_URL =
    'https://raw.githubusercontent.com/minhtran1615/newduan/b25dd0ee72ae2d2197db9c8a374fa383735a51eb/minhhh-removebg-preview.png'

// Decorative 3D objects in About section
export const DECO_IMAGES = {
  moonTopLeft:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  objBottomLeft:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  legoTopRight:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  groupBottomRight:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
}
