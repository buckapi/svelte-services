<script lang="ts">
    import BannerSection from '$lib/components/sections/1/banner-section.svelte';
     import ClientsSection from '$lib/components/sections/1/clients-section.svelte';
     import FeatureSection from '$lib/components/sections/1/feature-section.svelte';
     import AboutSection from '$lib/components/sections/1/about-section.svelte';
     import ProcessSection from '$lib/components/sections/1/process-section.svelte';

      import pb from '$lib/services/pocketbase';
    import { onMount, onDestroy } from 'svelte';
    import { specialists, initializeRealtimeSpecialists, cleanup } from '$lib/services/pocketbase';
    // Define la interfaz para los registros
    interface MemberRecord {
        id: string;
        full_name: string;
        email: string;
        [key: string]: any;
    } onMount(() => {
        initializeRealtimeSpecialists();
    });

    onDestroy(() => {
        cleanup();
    });
</script>

 <BannerSection />
 <ClientsSection />
 <FeatureSection />
 <AboutSection />
 <ProcessSection />
  



    <!-- testimonial-section -->
    <section class="testimonial-section bg-color-3">
        <div class="bg-layer" style="background-image: url(assets/images/background/testimonial-1.jpg);"></div>
        <div class="pattern-layer">
            <div class="pattern-1" style="background-image: url(assets/images/shape/shape-22.png);"></div>
            <div class="pattern-2" style="background-image: url(assets/images/shape/shape-23.png);"></div>
        </div>
        <div class="auto-container">
            <div class="row clearfix">
                <div class="col-xl-7 col-lg-12 col-md-12 inner-column">
                    <div class="testimonial-inner">
                        <div class="pattern" style="background-image: url(assets/images/shape/shape-21.png);"></div>
                        <div class="sec-title">
                            <p>Testimonials</p>
                            <h2>What client's say?</h2>
                        </div>
                        <div class="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                            <div class="testimonial-block-one">
                                <div class="inner-box">
                                    <div class="text">
                                        <p>" Lorem ipsum dolor sit amet consectetur adipic  eksed do eiusmod tempor incid unt labore dolore magna Aliqua.enim minim veniam, quis nostrud. "</p>
                                    </div>
                                    <div class="author-info">
                                        <figure class="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""></figure>
                                        <h3>Amelia Anna</h3>
                                        <span class="designation">Amelia Anna</span>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-block-one">
                                <div class="inner-box">
                                    <div class="text">
                                        <p>" Lorem ipsum dolor sit amet consectetur adipic  eksed do eiusmod tempor incid unt labore dolore magna Aliqua.enim minim veniam, quis nostrud. "</p>
                                    </div>
                                    <div class="author-info">
                                        <figure class="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""></figure>
                                        <h3>Amelia Anna</h3>
                                        <span class="designation">Amelia Anna</span>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-block-one">
                                <div class="inner-box">
                                    <div class="text">
                                        <p>" Lorem ipsum dolor sit amet consectetur adipic  eksed do eiusmod tempor incid unt labore dolore magna Aliqua.enim minim veniam, quis nostrud. "</p>
                                    </div>
                                    <div class="author-info">
                                        <figure class="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""></figure>
                                        <h3>Amelia Anna</h3>
                                        <span class="designation">Amelia Anna</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- testimonial-section end -->


    <!-- team-section -->
    <section class="team-section">
        <div class="auto-container">
            <div class="sec-title centred">
                <p>Meet Our Professionals</p>
                <h2>Top Rated Specialists</h2>
            </div>
            <div class="row clearfix">
                {#each $specialists as specialist}
                    <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                        <div class="team-block-one wow fadeInLeft animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern">
                                    <div class="pattern-1" style="background-image: url(assets/images/shape/shape-24.png);"></div>
                                    <div class="pattern-2" style="background-image: url(assets/images/shape/shape-25.png);"></div>
                                </div>
                                <figure class="image-box">
                                    <img src={specialist.images[0]} alt={specialist.full_name}>
                                </figure>
                                <div class="content-box">
                                    <div class="like-box"><a href="index.html" aria-label="Añadir a favoritos"><i class="far fa-heart"></i></a></div>
                                    <ul class="name-box clearfix">
                                        <li class="name"><h3><a href="doctors-details.html">{specialist.full_name}</a></h3></li>
                                        <li><i class="icon-Trust-1"></i></li>
                                        <li><i class="icon-Trust-2"></i></li>
                                    </ul>
                                    <span class="designation">{specialist.specialization || 'Especialista'}</span>
                                    <div class="text">
                                        <p>{specialist.description || 'Profesional disponible para atender tus necesidades'}</p>
                                    </div>
                                    <div class="rating-box clearfix">
                                        <ul class="rating clearfix">
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><a href="index.html">(32)</a></li>
                                        </ul>
                                        <div class="link"><a href="index.html">Disponible Hoy</a></div>
                                    </div>
                                    <div class="location-box">
                                        <p><i class="fas fa-map-marker-alt"></i>{specialist.location || 'Ubicación no especificada'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
            <div class="more-btn centred"><a href="doctors-1.html" class="theme-btn-one">All Specialist<i class="icon-Arrow-Right"></i></a></div>
        </div>
    </section>
    <!-- team-section end -->


    <!-- search-doctors -->
    <section class="search-doctors bg-color-3">
        <div class="pattern-layer">
            <div class="pattern-1" style="background-image: url(assets/images/shape/shape-27.png);"></div>
            <div class="pattern-2" style="background-image: url(assets/images/shape/shape-28.png);"></div>
            <div class="pattern-3" style="background-image: url(assets/images/shape/shape-29.png);"></div>
        </div>
        <div class="auto-container">
            <div class="sec-title centred">
                <p>Meet Our Professionals</p>
                <h2>Search for other doctors</h2>
            </div>
            <div class="row clearfix">
                <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                    <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <div class="pattern" style="background-image: url(assets/images/shape/shape-26.png);"></div>
                            <h3>Browse <br />by Speciality</h3>
                            <ul class="doctors-list clearfix">
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Cardiology</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Dermatology</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Family Medicine</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Obstetrics & Gynecology</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Oncology</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Orthopedic Surgery</a></li>
                            </ul>
                            <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">See all<i class="icon-Arrow-Right"></i></a></div>
                            <div class="link"><a href="doctors-1.html" aria-label="Ver todos"><i class="icon-Arrow-Right"></i></a></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                    <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <div class="pattern" style="background-image: url(assets/images/shape/shape-26.png);"></div>
                            <h3>Browse <br />by Condition</h3>
                            <ul class="doctors-list clearfix">
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Breast Cancer</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Dementia</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Endometriosis</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Multiple Sclerosis (MS)</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Fibromyalgia</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Parkinson's Disease</a></li>
                            </ul>
                            <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">See all<i class="icon-Arrow-Right"></i></a></div>
                            <div class="link"><a href="doctors-1.html" aria-label="Ver todos"><i class="icon-Arrow-Right"></i></a></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                    <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <div class="pattern" style="background-image: url(assets/images/shape/shape-26.png);"></div>
                            <h3>Browse <br />by Procedure</h3>
                            <ul class="doctors-list clearfix">
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">ACL Surgery</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">EEG (Electroencephalogram)</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Hysterectomy</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Knee Replacement</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Multiple Sclerosis Therapy</a></li>
                                <li><a href="https://azim.commonsupport.com/Docpro/doctors-profile.html">Prostate Removal</a></li>
                            </ul>
                            <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">See all<i class="icon-Arrow-Right"></i></a></div>
                            <div class="link"><a href="doctors-1.html" aria-label="Ver todos"><i class="icon-Arrow-Right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- search-doctors end -->


    <!-- cta-section -->
    <section class="cta-section bg-color-2">
        <div class="pattern-layer">
            <div class="pattern-1" style="background-image: url(assets/images/shape/shape-17.png);"></div>
            <div class="pattern-2" style="background-image: url(assets/images/shape/shape-18.png);"></div>
            <div class="pattern-3" style="background-image: url(assets/images/shape/shape-19.png);"></div>
        </div>
        <div class="auto-container">
            <div class="row clearfix">
                <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div class="image-box wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <figure class="image"><img src="assets/images/resource/phone-1.png" alt=""></figure>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div class="content_block_2">
                        <div class="content-box">
                            <div class="sec-title light">
                                <p>Download apps</p>
                                <h2>For Better Test Download Mobile App</h2>
                            </div>
                            <div class="text">
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna.</p>
                            </div>
                            <div class="btn-box clearfix">
                                <a href="index.html" class="download-btn app-store">
                                    <i class="fab fa-apple"></i>
                                    <span>Download on</span>
                                    <h3>App Store</h3>
                                </a>
                                <a href="index.html" class="download-btn play-store">
                                    <i class="fab fa-google-play"></i>
                                    <span>Download on</span>
                                    <h3>Google Play</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- cta-section end -->


    <!-- news-section -->
    <section class="news-section">
        <div class="auto-container">
            <div class="sec-title centred">
                <p>News & Article</p>
                <h2>Stay Update With Docpro</h2>
            </div>
            <div class="row clearfix">
                <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img src="assets/images/news/news-1.jpg" alt="">
                                <a href="https://azim.commonsupport.com/Docpro/blog-details" aria-label="Ver detalles" class="link"><i class="fas fa-link"></i></a>
                                <span class="category">Featured</span>
                            </figure>
                            <div class="lower-content">
                                <h3><a href="blog-details.html">Including animation in your design system</a></h3>
                                <ul class="post-info">
                                    <li><img src="assets/images/news/admin-1.png" alt=""><a href="index.html">Eva Green</a></li>
                                    <li>April 10, 2020</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing sed.</p>
                                <div class="link"><a href="blog-details.html" aria-label="Ver detalles"><i class="icon-Arrow-Right"></i></a></div>
                                <div class="btn-box"><a href="blog-details.html" class="theme-btn-one">Read more<i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img src="assets/images/news/news-2.jpg" alt="">
                                <a href="https://azim.commonsupport.com/Docpro/blog-details" aria-label="Ver detalles" class="link"><i class="fas fa-link"></i></a>
                                <span class="category">Featured</span>
                            </figure>
                            <div class="lower-content">
                                <h3><a href="blog-details.html">Baking can be done with a few things.</a></h3>
                                <ul class="post-info">
                                    <li><img src="assets/images/news/admin-2.png" alt=""><a href="index.html">George Clooney</a></li>
                                    <li>April 09, 2020</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing sed.</p>
                                <div class="link"><a href="blog-details.html" aria-label="Ver detalles"><i class="icon-Arrow-Right"></i></a></div>
                                <div class="btn-box"><a href="blog-details.html" class="theme-btn-one">Read more<i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img src="assets/images/news/news-3.jpg" alt="">
                                <a href="https://azim.commonsupport.com/Docpro/blog-details" aria-label="Ver detalles" class="link"><i class="fas fa-link"></i></a>
                                <span class="category">Featured</span>
                            </figure>
                            <div class="lower-content">
                                <h3><a href="blog-details.html">Great food is not just eating energy.</a></h3>
                                <ul class="post-info">
                                    <li><img src="assets/images/news/admin-3.png" alt=""><a href="index.html">George Clooney</a></li>
                                    <li>April 08, 2020</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing sed.</p>
                                <div class="link"><a href="blog-details.html" aria-label="Ver detalles"><i class="icon-Arrow-Right"></i></a></div>
                                <div class="btn-box"><a href="blog-details.html" class="theme-btn-one">Read more<i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- news-section end -->


    <!-- agent-section -->
    <section class="agent-section">
        <div class="auto-container">
            <div class="inner-container bg-color-2">
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 left-column">
                        <div class="content_block_3">
                            <div class="content-box">
                                <h3>Emergency call</h3>
                                <div class="support-box">
                                    <div class="icon-box"><i class="fas fa-phone"></i></div>
                                    <span>Telephone</span>
                                    <h3><a href="tel:11165458856">+(111) 65_458_856</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 right-column">
                        <div class="content_block_4">
                            <div class="content-box">
                                <h3>Sign up for Email</h3>
                                <form action="index.html" method="post" class="subscribe-form">
                                    <div class="form-group">
                                        <input type="email" name="email" placeholder="Your Email" required={true}>
                                        <button type="submit" class="theme-btn-one">Submit now<i class="icon-Arrow-Right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- agent-section -->
