import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <span>Koushik@devHuß</span>
      <span>© {(new Date()).getFullYear()} devHuß</span>
    </div>
  )
}

export default Footer