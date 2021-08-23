import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
			 <link rel="shortcut icon" href="/favicon.ico" />
             <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
		     <link rel="stylesheet" type="text/css" href="assets/css/fontawesome-all.css" />
		     <link rel="stylesheet" type="text/css" href="assets/css/icomoon.css" />
		     <link rel="stylesheet" type="text/css" href="assets/css/animate.css" />
		     <link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.min.css" />
		     <link rel="stylesheet" type="text/css" href="assets/css/owl.theme.default.min.css" />
		     <link rel="stylesheet" type="text/css" href="assets/css/magnific-popup.css" />
		     <link rel="stylesheet" type="text/css" href="assets/css/jquery-ui.css" />
		     <link rel="stylesheet" type="text/css" href="assets/css/aos.css" />
             <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        </Head>
        <body className="home-freelancer">
		  <div id="thetop"></div>
		  <div id="backtotop">
			<a href="#" id="scroll">
				<i className="far fa-arrow-up"></i>
			</a>
		  </div>
		  <Main />
          <NextScript />
		  <script async src="assets/js/jquery-1.10.1.min.js" />
		  <script async src="assets/js/popper.min.js" />
		  <script async src="assets/js/bootstrap.min.js" />
		  <script async src="assets/js/owl.carousel.min.js" />
		  <script async src="assets/js/counterup.min.js" />
		  <script async src="assets/js/waypoints.min.js" />
		  <script async src="assets/js/countdown.js" />
		  <script async src="assets/js/magnific-popup.min.js" />
		  <script async src="assets/js/isotope.pkgd.min.js" />
		  <script async src="assets/js/masonry.pkgd.min.js" />
		  <script async src="assets/js/imagesloaded.pkgd.min.js" />
		  <script async src="assets/js/jquery-ui.js" />
		  <script async src="assets/js/aos.js" />
		  <script async src="assets/js/validate.js" />
          <script async src="assets/js/gmaps.min.js" />
          <script async src="assets/js/mCustomScrollbar.js" />
          <script async src="assets/js/custom.js" />
        </body>	
      </Html>
    )
  }
}

export default MyDocument
