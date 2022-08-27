import './index.css';

export default function ServiceCards(){
    return(
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <i class="fa-solid fa-house-lock card-img-top card-logo"></i>
                    <div class="card-body">
                        <h5 class="card-title">Residential</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                    <i class="fa-solid fa-car card-img-top card-logo"></i>
                    <div class="card-body">
                        <h5 class="card-title">Automotive</h5>
                        <p class="card-text">This is a short card.</p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <i class="fa-solid fa-building card-img-top card-logo"></i>
                    <div class="card-body">
                        <h5 class="card-title">Comercial</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural.</p>
                    </div>
                </div>
            </div>
         </div>
    );
}