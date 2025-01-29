import "./Footer.css";

const Footer = () => {
  let currentDate = new Date();
  let cYear = currentDate.getFullYear();
  return (
    <>
      <div className="footer">
        <div className="fText">Copyright &copy;  {cYear} SheSparks</div>
      </div>
    </>
  );
};

export default Footer;
