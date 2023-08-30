import Header from "../components/header"
import SideMenu from "../components/sideMenu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<div>
    <Header />
    <SideMenu />
    {children}
  </div>
  )
}
