<script lang="ts">
    // Función auxiliar para crear un array de números con tipo definido
    const range = (n: number) => Array.from({ length: n }, (_, i) => i);
 
    let favorites: Set<string> = new Set<string>();
    
    const toggleFavorite = (doctorName: string) => {
        favorites = new Set(favorites).add(doctorName);
    };
    const doctors = [
        {
            image: "assets/images/team/team-13.jpg",
            name: "Dr. Julia Jhones",
            credentials: "MBBS, MS - General Surgery, MCh",
            rating: 5,
            reviews: 32,
            location: "G87P, Birmingham, UK",
            available: true
        },
        {
            image: "assets/images/team/team-14.jpg",
            name: "Dr. Rex Allen",
            credentials: "MBBS, MS - General Surgery, MCh",
            rating: 5,
            reviews: 17,
            location: "G87P, Birmingham, UK",
            available: false
        },
        // ... tercer doctor
            ];
</script>

<!-- team-style-three -->
<section class="team-style-three">
    <div class="pattern-layer">
        <div class="pattern-1" style="background-image: url(assets/images/shape/shape-51.png);"></div>
        <div class="pattern-2" style="background-image: url(assets/images/shape/shape-52.png);"></div>
        <div class="pattern-3" style="background-image: url(assets/images/shape/shape-53.png);"></div>
    </div>
    <div class="auto-container">
        <div class="sec-title light">
            <p>Meet Our Professionals</p>
            <h2>Top Rated Specialists</h2>
            <div class="more-btn"><a href="doctors-1.html" class="theme-btn-one">All Specialist<i class="icon-Arrow-Right"></i></a></div>
        </div>
        <div class="row clearfix">
            {#each doctors as doctor, i}
                <div class="col-lg-4 col-md-6 col-sm-12 team-block">
                    <div class="team-block-three wow fadeInUp animated" 
                         data-wow-delay="{i * 300}ms" 
                         data-wow-duration="1500ms">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img src={doctor.image} alt={doctor.name}>
                                <button 
                                    class="favorite-btn" 
                                    on:click={() => toggleFavorite(doctor.name)}
                                    aria-label="Añadir a favoritos"
                                >
                                    <i class="far fa-heart {favorites.has(doctor.name) ? 'fas' : 'far'}"></i>
                                </button>
                            </figure>
                            <div class="lower-content">
                                <ul class="name-box clearfix">
                                    <li class="name"><h3><a href="doctors-dashboard.html">{doctor.name}</a></h3></li>
                                    <li><i class="icon-Trust-1"></i></li>
                                    <li><i class="icon-Trust-2"></i></li>
                                </ul>
                                <span class="designation">{doctor.credentials}</span>
                                <div class="rating-box clearfix">
                                    <ul class="rating clearfix">
                                        {#each range(doctor.rating) as _, j}
                                            <li><i class="icon-Star"></i></li>
                                        {/each}
                                        <li><a href="doctors-dashboard.html">({doctor.reviews})</a></li>
                                    </ul>
                                </div>
                                <div class="location-box">
                                    <p><i class="fas fa-map-marker-alt"></i>{doctor.location}</p>
                                </div>
                                <div class="lower-box clearfix">
                                    <span class="text {doctor.available ? '' : 'not-available'}">
                                        {doctor.available ? 'Available Today' : 'Not Available'}
                                    </span>
                                    <a href="doctors-dashboard.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
<!-- team-style-three -->
