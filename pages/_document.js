import Document, { Html, Head, Main, NextScript } from 'next/document'

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
        <body>
          <Main />
          <NextScript />
        </body>
		  <script src="assets/js/jquery-1.10.1.min.js"></script>
		  <script src="assets/js/popper.min.js"></script>
		  <script src="assets/js/bootstrap.min.js"></script>
		  <script src="assets/js/owl.carousel.min.js"></script>
		  <script src="assets/js/counterup.min.js"></script>
		  <script src="assets/js/waypoints.min.js"></script>
		  <script src="assets/js/countdown.js"></script>
		  <script src="assets/js/magnific-popup.min.js"></script>
		  <script src="assets/js/isotope.pkgd.min.js"></script>
		  <script src="assets/js/masonry.pkgd.min.js"></script>
		  <script src="assets/js/imagesloaded.pkgd.min.js"></script>
		  <script src="assets/js/jquery-ui.js"></script>
		  <script src="assets/js/aos.js"></script>
		  <script src="assets/js/validate.js"></script>
          <script src="assets/js/gmaps.min.js"></script>
          <script src="assets/js/mCustomScrollbar.js"></script>
          <script src="assets/js/custom.js"></script>		
      </Html>
    )
  }
}

export default MyDocument
