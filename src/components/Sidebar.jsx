const AUTHOR_IMG =
  'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-1/432768205_1820817248343333_4874595460023489625_n.jpg?stp=c1231.494.192.192a_dst-jpg_s192x192_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Bey6Lxd_uQIQ7kNvgG2FydX&_nc_zt=24&_nc_ht=scontent-waw2-2.xx&_nc_gid=ALszUFw5mZIhzyQHvJSXgVV&oh=00_AYAwAIhYB3Es06x3fUnULBmq03uwwlRDJPHu3t3u25vJJA&oe=678D72AD'

export default function Sidebar() {
  return (
    <div className="col-md-3 mx-auto mb-3 text-center">
      <div className="blog-sidebar p-2 shadow-sm rounded">
        <h2>About</h2>
        <img
          src={AUTHOR_IMG}
          className="img-fluid rounded-circle"
          width="150"
          alt="Nicolas Garlinski"
        />
        <h4>Nicolas Garlinski</h4>
      </div>
    </div>
  )
}
