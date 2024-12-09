  <script lang="ts">
    import { specialists, initializeRealtimeSpecialists, cleanup } from '$lib/services/pocketbase';
    import { onMount, onDestroy } from 'svelte';    
    onMount(() => {
        initializeRealtimeSpecialists();
    });

    onDestroy(() => {
        cleanup();
    });
</script>

  <!-- clinic-half-map -->
   <section class="clinic-half-map">
    <div class="outer-container clearfix">
        <div class="left-inner pull-left bg-color-3 select-field">
            <div class="content-box">
                <div class="form-inner bg-color-2 clearfix">
                    <ul class="select-box clearfix">
                        <li>
                            <div class="single-checkbox">
                                <input type="radio" name="check-box" id="check1">
                                <label for="check1"><span></span>All</label>
                            </div>
                        </li>
                        <li>
                            <div class="single-checkbox">
                                <input type="radio" name="check-box" id="check2">
                                <label for="check2"><span></span>Doctor</label>    
                            </div>
                        </li>
                        <li>
                            <div class="single-checkbox">
                                <input type="radio" name="check-box" id="check3" checked="{true}"          >
                                <label for="check3"><span></span>Clinic</label>
                            </div>
                        </li>
                    </ul>
                    <form action="index.html" method="post">
                        <div class="form-group clearfix">
                            <select class="wide">
                               <option data-display="Select Location">Select Location</option>
                               <option value="1">California</option>
                               <option value="2">New York</option>
                               <option value="3">Sun Francis</option>
                               <option value="4">Shicago</option>
                            </select>
                            <input type="text" name="name" placeholder="Ex. Name, Specialization..." required={true}>
                            <button type="submit" class="theme-btn-one" aria-label="Buscar"><i class="icon-Arrow-Right"></i></button>
                        </div>
                    </form>
                </div>
                <div class="content-side clinic-section">
                    <div class="item-shorting clearfix">
                        <div class="left-column pull-left">
                            <h3>Showing 1-6 of 20 Results</h3>
                        </div>
                        <div class="right-column pull-right clearfix">
                            <div class="short-box clearfix">
                                <div class="select-box">
                                    <select class="wide">
                                       <option data-display="Sort by">Sort by</option>
                                       <option value="1">Cardiology</option>
                                       <option value="2">Nurology</option>
                                       <option value="4">Pragnency</option>
                                    </select>
                                </div>
                            </div>
                            <div class="menu-box">
                                <button class="list-view" aria-label="Ver como lista"><i class="icon-List"></i></button>
                                <button class="grid-view on" aria-label="Ver como grid"><i class="icon-Grid"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper grid">
                        <div class="clinic-list-content">
                            <div class="clinic-block-one">
                                <div class="inner-box">
                                    <div class="pattern">
                                        <div class="pattern-1" style="background-image: url(assets/images/shape/shape-24.png);"></div>
                                        <div class="pattern-2" style="background-image: url(assets/images/shape/shape-25.png);"></div>
                                    </div>
                                    <figure class="image-box"><img src="assets/images/clinic/clinic-1.png" alt=""></figure>
                                    <div class="content-box">
                                        <div class="like-box"><a href="clinic-details.html" aria-label="Añadir a favoritos"><i class="far fa-heart"></i></a></div>
                                        <ul class="name-box clearfix">
                                            <li class="name"><h3><a href="clinic-details.html">Memorial Hospital</a></h3></li>
                                            <li><i class="icon-Trust-1"></i></li>
                                            <li><i class="icon-Trust-2"></i></li>
                                        </ul>
                                        <span class="designation">It’s all about care</span>
                                        <div class="text">
                                            <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna.</p>
                                        </div>
                                        <div class="rating-box clearfix">
                                            <ul class="rating clearfix">
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><a href="clinic-details.html">(17)</a></li>
                                            </ul>
                                            <div class="link"><a href="clinic-details.html">24/7 Available</a></div>
                                        </div>
                                        <div class="location-box">
                                            <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                        </div>
                                        <div class="btn-box"><a href="clinic-details.html">Visit Now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="clinic-block-one">
                                <div class="inner-box">
                                    <div class="pattern">
                                        <div class="pattern-1" style="background-image: url(assets/images/shape/shape-24.png);"></div>
                                        <div class="pattern-2" style="background-image: url(assets/images/shape/shape-25.png);"></div>
                                    </div>
                                    <figure class="image-box"><img src="assets/images/clinic/clinic-2.png" alt=""></figure>
                                    <div class="content-box">
                                        <div class="like-box"><a href="clinic-details.html" aria-label="Añadir a favoritos"><i class="far fa-heart"></i></a></div>
                                        <ul class="name-box clearfix">
                                            <li class="name"><h3><a href="clinic-details.html">Potsdam Hospital</a></h3></li>
                                            <li><i class="icon-Trust-1"></i></li>
                                            <li><i class="icon-Trust-2"></i></li>
                                        </ul>
                                        <span class="designation">Best healthcare center</span>
                                        <div class="text">
                                            <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna.</p>
                                        </div>
                                        <div class="rating-box clearfix">
                                            <ul class="rating clearfix">
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><a href="clinic-details.html">(21)</a></li>
                                            </ul>
                                            <div class="link"><a href="clinic-details.html">24/7 Available</a></div>
                                        </div>
                                        <div class="location-box">
                                            <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                        </div>
                                        <div class="btn-box"><a href="clinic-details.html">Visit Now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="clinic-block-one">
                                <div class="inner-box">
                                    <div class="pattern">
                                        <div class="pattern-1" style="background-image: url(assets/images/shape/shape-24.png);"></div>
                                        <div class="pattern-2" style="background-image: url(assets/images/shape/shape-25.png);"></div>
                                    </div>
                                    <figure class="image-box"><img src="assets/images/clinic/clinic-3.png" alt=""></figure>
                                    <div class="content-box">
                                        <div class="like-box"><a href="clinic-details.html" aria-label="Añadir a favoritos"><i class="far fa-heart"></i></a></div>
                                        <ul class="name-box clearfix">
                                            <li class="name"><h3><a href="clinic-details.html">Hepburn Medical</a></h3></li>
                                            <li><i class="icon-Trust-1"></i></li>
                                            <li></li>
                                        </ul>
                                        <span class="designation">Change your lifestyle</span>
                                        <div class="text">
                                            <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna.</p>
                                        </div>
                                        <div class="rating-box clearfix">
                                            <ul class="rating clearfix">
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><a href="clinic-details.html">(32)</a></li>
                                            </ul>
                                            <div class="link"><a href="clinic-details.html">24/7 Available</a></div>
                                        </div>
                                        <div class="location-box">
                                            <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                        </div>
                                        <div class="btn-box"><a href="clinic-details.html">Visit Now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="clinic-block-one">
                                <div class="inner-box">
                                    <div class="pattern">
                                        <div class="pattern-1" style="background-image: url(assets/images/shape/shape-24.png);"></div>
                                        <div class="pattern-2" style="background-image: url(assets/images/shape/shape-25.png);"></div>
                                    </div>
                                    <figure class="image-box"><img src="assets/images/clinic/clinic-4.png" alt=""></figure>
                                    <div class="content-box">
                                        <div class="like-box"><a href="clinic-details.html" aria-label="Añadir a favoritos"><i class="far fa-heart"></i></a></div>
                                        <ul class="name-box clearfix">
                                            <li class="name"><h3><a href="clinic-details.html">Queens Hospital</a></h3></li>
                                            <li></li>
                                            <li><i class="icon-Trust-2"></i></li>
                                        </ul>
                                        <span class="designation">It’s all about care</span>
                                        <div class="text">
                                            <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna.</p>
                                        </div>
                                        <div class="rating-box clearfix">
                                            <ul class="rating clearfix">
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><a href="clinic-details.html">(20)</a></li>
                                            </ul>
                                            <div class="link"><a href="clinic-details.html">24/7 Available</a></div>
                                        </div>
                                        <div class="location-box">
                                            <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                        </div>
                                        <div class="btn-box"><a href="clinic-details.html">Visit Now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="clinic-block-one">
                                <div class="inner-box">
                                    <div class="pattern">
                                        <div class="pattern-1" style="background-image: url(assets/images/shape/shape-24.png);"></div>
                                        <div class="pattern-2" style="background-image: url(assets/images/shape/shape-25.png);"></div>
                                    </div>
                                    <figure class="image-box"><img src="assets/images/clinic/clinic-5.png" alt=""></figure>
                                    <div class="content-box">
                                        <div class="like-box"><a href="clinic-details.html" aria-label="Añadir a favoritos"><i class="far fa-heart"></i></a></div>
                                        <ul class="name-box clearfix">
                                            <li class="name"><h3><a href="clinic-details.html">Highland Hospital</a></h3></li>
                                            <li><i class="icon-Trust-1"></i></li>
                                            <li><i class="icon-Trust-2"></i></li>
                                        </ul>
                                        <span class="designation">Best healthcare center</span>
                                        <div class="text">
                                            <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna.</p>
                                        </div>
                                        <div class="rating-box clearfix">
                                            <ul class="rating clearfix">
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><a href="clinic-details.html">(35)</a></li>
                                            </ul>
                                            <div class="link"><a href="clinic-details.html">24/7 Available</a></div>
                                        </div>
                                        <div class="location-box">
                                            <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                        </div>
                                        <div class="btn-box"><a href="clinic-details.html">Visit Now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="clinic-block-one">
                                <div class="inner-box">
                                    <div class="pattern">
                                        <div class="pattern-1" style="background-image: url(assets/images/shape/shape-24.png);"></div>
                                        <div class="pattern-2" style="background-image: url(assets/images/shape/shape-25.png);"></div>
                                    </div>
                                    <figure class="image-box"><img src="assets/images/clinic/clinic-6.png" alt=""></figure>
                                    <div class="content-box">
                                        <div class="like-box"><a href="clinic-details.html" aria-label="Añadir a favoritos"><i class="far fa-heart"></i></a></div>
                                        <ul class="name-box clearfix">
                                            <li class="name"><h3><a href="clinic-details.html">Medical Center</a></h3></li>
                                            <li><i class="icon-Trust-1"></i></li>
                                            <li></li>
                                        </ul>
                                        <span class="designation">Change your lifestyle</span>
                                        <div class="text">
                                            <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna.</p>
                                        </div>
                                        <div class="rating-box clearfix">
                                            <ul class="rating clearfix">
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><i class="icon-Star"></i></li>
                                                <li><a href="clinic-details.html">(35)</a></li>
                                            </ul>
                                            <div class="link"><a href="clinic-details.html">24/7 Available</a></div>
                                        </div>
                                        <div class="location-box">
                                            <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                        </div>
                                        <div class="btn-box"><a href="clinic-details.html">Visit Now</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clinic-grid-content grid-item">
                            <div class="row clearfix">
                                {#each $specialists as specialist}
                                    <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                                        <div class="team-block-three">
                                            <div class="inner-box">
                                                <figure class="image-box">
                                                    <img src={specialist.images[0] || "assets/images/clinic/clinic-1.jpg"} alt={specialist.full_name}>
                                                    <a href="clinic-details.html" aria-label="Añadir a favoritos"><i class="far fa-heart"></i></a>
                                                </figure>
                                                <div class="lower-content">
                                                    <ul class="name-box clearfix">
                                                        <li class="name"><h3><a href="clinic-details.html">Dr. {specialist.full_name}</a></h3></li>
                                                        <li><i class="icon-Trust-1"></i></li>
                                                        <li><i class="icon-Trust-2"></i></li>
                                                    </ul>
                                                    <span class="designation">{specialist.specialization}</span>
                                                    <div class="rating-box clearfix">
                                                        <ul class="rating clearfix">
                                                            <li><i class="icon-Star"></i></li>
                                                            <li><i class="icon-Star"></i></li>
                                                            <li><i class="icon-Star"></i></li>
                                                            <li><i class="icon-Star"></i></li>
                                                            <li><i class="icon-Star"></i></li>
                                                            <li><a href="clinic-details.html">(5)</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="location-box">
                                                        <p><i class="fas fa-map-marker-alt"></i>{specialist.address || "Dirección no disponible"}</p>
                                                    </div>
                                                    <div class="lower-box clearfix">
                                                        <span class="text">24/7 Disponible</span>
                                                        <a href="clinic-details.html">Reservar Ahora</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/each}
                            </div>
                            <!-- <div class="row clearfix">
                                <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                                    <div class="team-block-three">
                                        <div class="inner-box">
                                            <figure class="image-box">
                                                <img src="assets/images/clinic/clinic-1.jpg" alt="">
                                                <a href="clinic-details.html"><i class="far fa-heart"></i></a>
                                            </figure>
                                            <div class="lower-content">
                                                <ul class="name-box clearfix">
                                                    <li class="name"><h3><a href="clinic-details.html">Memorial Hospital</a></h3></li>
                                                    <li><i class="icon-Trust-1"></i></li>
                                                    <li></li>
                                                </ul>
                                                <span class="designation">It’s all about care</span>
                                                <div class="rating-box clearfix">
                                                    <ul class="rating clearfix">
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><a href="clinic-details.html">(32)</a></li>
                                                    </ul>
                                                </div>
                                                <div class="location-box">
                                                    <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                                </div>
                                                <div class="lower-box clearfix">
                                                    <span class="text">24/7 Available</span>
                                                    <a href="clinic-details.html">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                                    <div class="team-block-three">
                                        <div class="inner-box">
                                            <figure class="image-box">
                                                <img src="assets/images/clinic/clinic-2.jpg" alt="">
                                                <a href="clinic-details.html"><i class="far fa-heart"></i></a>
                                            </figure>
                                            <div class="lower-content">
                                                <ul class="name-box clearfix">
                                                    <li class="name"><h3><a href="clinic-details.html">Potsdam Hospital</a></h3></li>
                                                    <li><i class="icon-Trust-1"></i></li>
                                                    <li><i class="icon-Trust-2"></i></li>
                                                </ul>
                                                <span class="designation">Best healthcare center</span>
                                                <div class="rating-box clearfix">
                                                    <ul class="rating clearfix">
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><a href="clinic-details.html">(17)</a></li>
                                                    </ul>
                                                </div>
                                                <div class="location-box">
                                                    <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                                </div>
                                                <div class="lower-box clearfix">
                                                    <span class="text">24/7 Available</span>
                                                    <a href="clinic-details.html">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                                    <div class="team-block-three">
                                        <div class="inner-box">
                                            <figure class="image-box">
                                                <img src="assets/images/clinic/clinic-3.jpg" alt="">
                                                <a href="clinic-details.html"><i class="far fa-heart"></i></a>
                                            </figure>
                                            <div class="lower-content">
                                                <ul class="name-box clearfix">
                                                    <li class="name"><h3><a href="clinic-details.html">Hepburn Medical</a></h3></li>
                                                    <li><i class="icon-Trust-1"></i></li>
                                                    <li><i class="icon-Trust-2"></i></li>
                                                </ul>
                                                <span class="designation">Change your lifestyle</span>
                                                <div class="rating-box clearfix">
                                                    <ul class="rating clearfix">
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><a href="clinic-details.html">(25)</a></li>
                                                    </ul>
                                                </div>
                                                <div class="location-box">
                                                    <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                                </div>
                                                <div class="lower-box clearfix">
                                                    <span class="text">24/7 Available</span>
                                                    <a href="clinic-details.html">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                                    <div class="team-block-three">
                                        <div class="inner-box">
                                            <figure class="image-box">
                                                <img src="assets/images/clinic/clinic-4.jpg" alt="">
                                                <a href="clinic-details.html"><i class="far fa-heart"></i></a>
                                            </figure>
                                            <div class="lower-content">
                                                <ul class="name-box clearfix">
                                                    <li class="name"><h3><a href="clinic-details.html">Queens Hospital</a></h3></li>
                                                    <li><i class="icon-Trust-1"></i></li>
                                                    <li></li>
                                                </ul>
                                                <span class="designation">It’s all about care</span>
                                                <div class="rating-box clearfix">
                                                    <ul class="rating clearfix">
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><a href="clinic-details.html">(10)</a></li>
                                                    </ul>
                                                </div>
                                                <div class="location-box">
                                                    <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                                </div>
                                                <div class="lower-box clearfix">
                                                    <span class="text">24/7 Available</span>
                                                    <a href="clinic-details.html">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                                    <div class="team-block-three">
                                        <div class="inner-box">
                                            <figure class="image-box">
                                                <img src="assets/images/clinic/clinic-5.jpg" alt="">
                                                <a href="clinic-details.html"><i class="far fa-heart"></i></a>
                                            </figure>
                                            <div class="lower-content">
                                                <ul class="name-box clearfix">
                                                    <li class="name"><h3><a href="clinic-details.html">Highland Hospital</a></h3></li>
                                                    <li></li>
                                                    <li><i class="icon-Trust-2"></i></li>
                                                </ul>
                                                <span class="designation">Best healthcare center</span>
                                                <div class="rating-box clearfix">
                                                    <ul class="rating clearfix">
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><a href="clinic-details.html">(17)</a></li>
                                                    </ul>
                                                </div>
                                                <div class="location-box">
                                                    <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                                </div>
                                                <div class="lower-box clearfix">
                                                    <span class="text">24/7 Available</span>
                                                    <a href="clinic-details.html">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                                    <div class="team-block-three">
                                        <div class="inner-box">
                                            <figure class="image-box">
                                                <img src="assets/images/clinic/clinic-6.jpg" alt="">
                                                <a href="clinic-details.html"><i class="far fa-heart"></i></a>
                                            </figure>
                                            <div class="lower-content">
                                                <ul class="name-box clearfix">
                                                    <li class="name"><h3><a href="clinic-details.html">Jacobi Medical</a></h3></li>
                                                    <li><i class="icon-Trust-1"></i></li>
                                                    <li><i class="icon-Trust-2"></i></li>
                                                </ul>
                                                <span class="designation">Change your lifestyle</span>
                                                <div class="rating-box clearfix">
                                                    <ul class="rating clearfix">
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><a href="clinic-details.html">(30)</a></li>
                                                    </ul>
                                                </div>
                                                <div class="location-box">
                                                    <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                                </div>
                                                <div class="lower-box clearfix">
                                                    <span class="text">24/7 Available</span>
                                                    <a href="clinic-details.html">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                                    <div class="team-block-three">
                                        <div class="inner-box">
                                            <figure class="image-box">
                                                <img src="assets/images/clinic/clinic-7.jpg" alt="">
                                                <a href="clinic-details.html"><i class="far fa-heart"></i></a>
                                            </figure>
                                            <div class="lower-content">
                                                <ul class="name-box clearfix">
                                                    <li class="name"><h3><a href="clinic-details.html">St. Mary's Hospital</a></h3></li>
                                                    <li><i class="icon-Trust-1"></i></li>
                                                    <li><i class="icon-Trust-2"></i></li>
                                                </ul>
                                                <span class="designation">It’s all about care</span>
                                                <div class="rating-box clearfix">
                                                    <ul class="rating clearfix">
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><a href="clinic-details.html">(12)</a></li>
                                                    </ul>
                                                </div>
                                                <div class="location-box">
                                                    <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                                </div>
                                                <div class="lower-box clearfix">
                                                    <span class="text">24/7 Available</span>
                                                    <a href="clinic-details.html">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                                    <div class="team-block-three">
                                        <div class="inner-box">
                                            <figure class="image-box">
                                                <img src="assets/images/clinic/clinic-8.jpg" alt="">
                                                <a href="clinic-details.html"><i class="far fa-heart"></i></a>
                                            </figure>
                                            <div class="lower-content">
                                                <ul class="name-box clearfix">
                                                    <li class="name"><h3><a href="clinic-details.html">Unity Hospital</a></h3></li>
                                                    <li><i class="icon-Trust-1"></i></li>
                                                    <li><i class="icon-Trust-2"></i></li>
                                                </ul>
                                                <span class="designation">Best healthcare center</span>
                                                <div class="rating-box clearfix">
                                                    <ul class="rating clearfix">
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><i class="icon-Star"></i></li>
                                                        <li><a href="clinic-details.html">(05)</a></li>
                                                    </ul>
                                                </div>
                                                <div class="location-box">
                                                    <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                                </div>
                                                <div class="lower-box clearfix">
                                                    <span class="text">24/7 Available</span>
                                                    <a href="clinic-details.html">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="pagination-wrapper centred">
                        <ul class="pagination">
                            <li><a href="clinic-1.html" class="current">1</a></li>
                            <li><a href="clinic-1.html">2</a></li>
                            <li><a href="clinic-1.html">3</a></li>
                            <li><a href="clinic-1.html" aria-label="Siguiente"><i class="icon-Arrow-Right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-inner pull-right">
            <section class="banner-section style-five">
                <div class="map-layer" style="background-image: url(assets/images/shape/map-1.jpg);"></div>
                <div class="auto-container">
                    <div class="content-inner">
                        {#each $specialists as specialist, i}
                            <div class="single-item box-{i + 1}" class:active={i === 1}>
                                <div class="location-pin">
                                    <img src="assets/images/icons/map-marker-2.png" alt="">
                                </div>
                                <div class="doctors-box centred">
                                    <figure class="image">
                                        <img src={specialist.images[0] || "assets/images/resource/doctor-1.png"} alt={specialist.full_name}>
                                    </figure>
                                    <div class="shape" style="background-image: url(assets/images/shape/shape-78.png);"></div>
                                    <h3><a href="doctors-dashboard.html">Dr. {specialist.full_name}</a></h3>
                                    <span class="designation">{specialist.specialization}</span>
                                    <ul class="info clearfix">
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            {specialist.address || "Dirección no disponible"}
                                        </li>
                                        <li>
                                            <i class="fas fa-phone"></i>
                                            <a href="tel:{specialist.phone}">{specialist.phone || "Teléfono no disponible"}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        {/each}
                    </div>
                    <!-- <div class="content-inner">
                        <div class="single-item box-1">
                            <div class="location-pin"><img src="assets/images/icons/map-marker-2.png" alt=""></div>
                            <div class="doctors-box centred">
                                <figure class="image"><img src="assets/images/resource/doctor-1.png" alt=""></figure>
                                <div class="shape" style="background-image: url(assets/images/shape/shape-78.png);"></div>
                                <h3><a href="doctors-dashboard.html">Dr. Mary oernia</a></h3>
                                <span class="designation">MDS, BDS</span>
                                <ul class="info clearfix">
                                    <li><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</li>
                                    <li><i class="fas fa-phone"></i><a href="tel:2265458856">+(22) 65_458_856</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="single-item active box-2">
                            <div class="location-pin"><img src="assets/images/icons/map-marker-2.png" alt=""></div>
                            <div class="doctors-box centred">
                                <figure class="image"><img src="assets/images/resource/doctor-1.png" alt=""></figure>
                                <div class="shape" style="background-image: url(assets/images/shape/shape-78.png);"></div>
                                <h3><a href="doctors-dashboard.html">Dr. Mary Astor</a></h3>
                                <span class="designation">MDS, BDS</span>
                                <ul class="info clearfix">
                                    <li><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</li>
                                    <li><i class="fas fa-phone"></i><a href="tel:2265458856">+(22) 65_458_856</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="single-item box-3">
                            <div class="location-pin"><img src="assets/images/icons/map-marker-2.png" alt=""></div>
                            <div class="doctors-box centred">
                                <figure class="image"><img src="assets/images/resource/doctor-1.png" alt=""></figure>
                                <div class="shape" style="background-image: url(assets/images/shape/shape-78.png);"></div>
                                <h3><a href="doctors-dashboard.html">Dr. Mary Astor</a></h3>
                                <span class="designation">MDS, BDS</span>
                                <ul class="info clearfix">
                                    <li><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</li>
                                    <li><i class="fas fa-phone"></i><a href="tel:2265458856">+(22) 65_458_856</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> -->
                </div>
            </section>
        </div>
    </div>
</section>
<!-- clinic-half-map end -->