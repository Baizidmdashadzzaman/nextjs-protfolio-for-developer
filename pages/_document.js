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
			 <link rel="shortcut icon" href="/assets/images/Asset22.png" />
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
        </body>
		  <Script src="assets/js/jquery-1.10.1.min.js"></Script>
		  <Script src="assets/js/popper.min.js"></Script>
		  <Script src="assets/js/bootstrap.min.js"></Script>
		  <Script src="assets/js/owl.carousel.min.js"></Script>
		  <Script src="assets/js/counterup.min.js"></Script>
		  <Script src="assets/js/waypoints.min.js"></Script>
		  <Script src="assets/js/countdown.js"></Script>
		  <Script src="assets/js/magnific-popup.min.js"></Script>
		  <Script src="assets/js/isotope.pkgd.min.js"></Script>
		  <Script src="assets/js/masonry.pkgd.min.js"></Script>
		  <Script src="assets/js/imagesloaded.pkgd.min.js"></Script>
		  <Script src="assets/js/jquery-ui.js"></Script>
		  <Script src="assets/js/aos.js"></Script>
		  <Script src="assets/js/validate.js"></Script>
          <Script src="assets/js/gmaps.min.js"></Script>
          <Script src="assets/js/mCustomScrollbar.js"></Script>
          <Script src="assets/js/custom.js"></Script>		
      </Html>
    )
  }
}

export default MyDocument
