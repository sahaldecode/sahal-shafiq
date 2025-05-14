
// "use client";
// import React, { useState } from 'react';
// import React from 'react';

export default function Contact2() {

	return (
		<>

			<section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3 className="text-primary-2 mb-3">Let’s connect</h3>
									<form action="https://formsubmit.co/0023b8ab2d42e5a2b730bfdf249532b9" method="post">
										<div className="row g-3">
											<div className="col-md-6 ">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="name" name="name" placeholder="Your name" aria-label="username"    / >
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="phone" name="phone" placeholder="Phone" aria-label="phone"   />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="email" name="email" placeholder="Emaill" aria-label="email"   />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="subject" name="subject" placeholder="Subject" aria-label="subject"  />
											</div>
											<div className="col-12">
												<textarea className="form-control bg-3 border border-1 rounded-3" id="message" name="message" placeholder="Message" aria-label="With textarea" defaultValue={""}   />
											</div>
											<div className="col-12">
												<button type="submit" className="btn btn-primary-2 rounded-2">
													Send Message
													<i className="ri-arrow-right-up-line" />
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
						<div className="col-lg-5 d-flex flex-column ps-lg-8">
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-phone-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Phone Number</span>
									<h6 className="mb-0">+92-305-7735104</h6>
								</div>
								<a href="https://wa.me/923057735104" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-mail-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Email</span>
									<h6 className="mb-0">sahaldecode@gmail.com</h6>
								</div>
								<a href="mailto:sahaldecode@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										{/* <i className="ri-microsoft-teams text-primary-2 fs-26" /> */}
										<img className="text-primary-2 fs-26" style={{ filter: "hue-rotate(150deg)" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACp0lEQVR4nO2YzWsTQRjGpx9JacFqLiGrKBRroeBFQhUv1g+KO6M9SfUPMAc122BFz970pOBJBW/tDNo/oIiigsSkXjSmIAh+QKP1oCi1gk1t9pFpql1CNtkmm2bAeeCBkP2Y5zfzvjMkhGhpaWmVaspEh2BIcIppwfBTevXzqLxGVNbkMWzjFBnBgLKmeCnvISpqykRHxfAOCCVXQjAkqoZfNaewSp8f2vR+XzSY/djbkrKlo4Hs3JGuD+bGAVA89wogGNKl4fta03YPScJp+Z28tiEAnGHB8wowLDiflTNfGv6vo8GZnHIAgmHe+awsGTeAXS0pW/kS6lUCgGG01iaOBrJz7iWUnfUcwjKAWn3OKBQGOjNLzsFdz4IRBJ3jyt3GrYnN7tmBDQGQjoXz2BN8UXAFqHCQDa1sozM5WTLScubXFd4PAOm4YWN486flvV2ZRdnYK81NkZJlUzrzvssPAKf9T/g/AlzcCbx7UNnyHmUBxnqAR9eKfnx9LfS9q99x90rR/Z3psltgte20x3Hv6fDi77pXtNoLEtvXAHrbn5UNXStALJyvvyQ1ANErAF1Clm7ipN6FrEZto05XOwMacA7YygH0B6a9A0TwVTmAA1terQfgvnIA53d/9g6wFad8Behrc/8h7hVggtoYDBVX4Uxk2XWseAQPLxO0Ej/l6W9ED751OI+DoZnlCuGfnt2BkK/hVwFu+AEgGDB+tJC0DFhWBKm4gfm4gR/xCJJxA7ERgjbSCE0wHPILQDAkSDMkGJJ1h6f4Mm6iuykA/Dj2C4alegA4Rawp4f9BUFyoY/bvEBXEGS5xBntdM89wc3KkQQ1aa1Nzhjcewuc4xQmiop4Mop2bGOYMnFO8Fgy/BMU3zvCWUwjBcPJ2FIFm59TS0iJq6A8+GhhzushK6QAAAABJRU5ErkJggg==" alt="microsoft-teams"></img>
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Microsoft Team</span>
									<h6 className="mb-0">Sahal Shafiq</h6>
								</div>
								<a href="#" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-map-2-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Address</span>
									<h6 className="mb-0">Officer Colony, Punjab, Pakistan</h6>
								</div>
								{/* <a href="https://maps.google.com/maps?q=1st+avenue,New+York" className="position-absolute top-0 start-0 w-100 h-100" /> */}
							</div>
						</div>
					</div>
				</div>
			</section>



		</>
	)
}
