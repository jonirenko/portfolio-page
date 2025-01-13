import React from 'react';
import photo from "../images/homepage-pic.jpg";

function Home() {
  return (
    <div className='home-container'>
        <div className='home-photo-container'>
           <img src={photo} alt='Joni Renko' className='home-photo'/>
        </div>

        <div className='home-bio-container'>
            <div className='home-bio'>
                <div className='bio-text'>
                    <h1>Who is Joni Renko?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis quam nisl, id elementum ligula ultrices at. Pellentesque in nunc ornare, scelerisque sem ut, aliquam tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla vitae lectus in auctor. Fusce hendrerit ligula at felis interdum, non laoreet est aliquam. Cras risus magna, varius vel tempor id, sodales in tortor. Cras rhoncus erat in libero vestibulum, porta ornare augue vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eget consectetur dolor. Nullam sagittis euismod tellus a finibus. Aliquam imperdiet, magna eu rutrum pharetra, felis massa tristique leo, vel malesuada tortor nisi nec nisi. Ut efficitur, nunc vel tincidunt semper, ipsum elit eleifend arcu, et vestibulum nisl nunc quis ipsum.</p>
                    <br></br>
                    <p>Cras congue nulla tortor, non ullamcorper urna tempus at. Nunc nec lectus gravida augue malesuada ultricies quis eget felis. Donec mattis mi quam, in accumsan justo blandit eu. Aliquam molestie volutpat lacinia. Duis dui ante, imperdiet in accumsan at, convallis sit amet arcu. In vehicula maximus ex nec sollicitudin. Integer nec consequat diam. Phasellus sagittis odio sit amet lorem tempus, ut tristique orci imperdiet. Cras in enim nulla. Sed lacinia, dui in ornare gravida, ex tellus consectetur mi, ac accumsan lectus leo at enim. Donec pharetra sem non lectus euismod, nec posuere ipsum tristique. Etiam vulputate metus venenatis sem luctus, eget ullamcorper purus pellentesque. Aenean ante ipsum, aliquam eu dolor et, mollis ultricies elit. Nullam eu ipsum sed enim rhoncus ultricies pharetra pretium nibh. Donec luctus eget eros a fermentum. Donec eleifend diam vel risus mollis, sed efficitur odio suscipit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;