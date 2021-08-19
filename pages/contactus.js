import Head from 'next/head'
import Image from 'next/image'

export default function Contactus() {
  return (
    <>

      <Head>
	         <meta charSet="utf-8" />
		     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		     <meta httpEquiv="x-ua-compatible" content="ie=edge" />
             <title>Asadzaman : Contactus</title>
      </Head>
		
<main>


			<section id="service-section" className="service-section sec-ptb-100 text-center clearfix">
				<div className="container">

					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8 col-sm-9 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
						
						
							<div className="section-title size-increase">
								<h2 className="title-text mb-0">
									Hi, You can contact with me by submitting form bellow.You email me at <br/>baizid.md.ashadzzaman@gmail.com
								</h2>
							</div>
							<br/>
							<Image layout='fill' src="/assets/images/gifs/e4f5ed296c252b0de33002019836385f.gif" alt="image_not_found" />
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div className="service-default plr-30 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
								<span className="item-icon">
									<Image layout='fill' src="/assets/images/icons/icon_14.png" alt="image_not_found" />
								</span>
								<h3 className="item-title">Address</h3>
								<p className="mb-0">
									Pahartoli 12 Quater,Chittagong Bangladesh.
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div className="service-default plr-30 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
								<span className="item-icon">
									<Image layout='fill' src="/assets/images/icons/icon_15.png" alt="image_not_found"/>
								</span>
								<h3 className="item-title">Phone Numbers</h3>
								<p className="mb-0">
									8801862420119. 
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div className="service-default plr-30 aos-init aos-animate" data-aos="fade-up" data-aos-delay="700">
								<span className="item-icon">
									<Image layout='fill' src="/assets/images/icons/icon_16.png" alt="image_not_found"/>
								</span>
								<h3 className="item-title">Emails &amp; Support</h3>
								<p className="mb-0">
									baizid.md.ashadzzaman@gmail.com. 
								</p>
							</div>
						</div>
					</div>

				</div>
			</section>


			
			<section id="contact-section" className="contact-section sec-ptb-100 clearfix">
				<div className="container">

					<div className="row justify-content-center mb-60">
						<div className="col-lg-6 col-md-7 col-sm-9 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
							<div className="section-title text-center size-increase">
								<h2 className="title-text mb-0">Let’s create creativity projects together</h2>
							</div>
						</div>
					</div>

					<form id="contact_form" action="#" method="POST" >
						<div className="row justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
							<div className="col-lg-4">
								<div className="form-item">
									<input type="text" name="name" placeholder="Full Name"/>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="form-item">
									<input type="email" name="email" placeholder="Email Address"/>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="form-item">
									<input type="text" name="website" placeholder="Website"/>
								</div>
							</div>

							<div className="col-lg-12">
								<div className="form-item">
									<textarea name="message" placeholder="Comment"></textarea>
								</div>
							</div>
						</div>
						<div className="text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
							<a href="#!" className="store-btn"><span className="icon"><i className="fas fa-envelope-open"></i></span><span className="content"><small>Thank You </small><strong>Send Email</strong></span></a>
						</div>
					</form>

				</div>
			</section>
			
		</main>



    </>
  )
}
