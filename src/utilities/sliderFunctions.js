import gsap from 'gsap';

export const handleChangePerson  = (ref,index,setCounter) =>{

    gsap.fromTo(ref,.5,{opacity:0,},{opacity:1});

    setCounter(index);
}

export const setChangePersonMobile  =(ref,counter,type,offers,setCounter) =>{
        
    gsap.fromTo(ref,.5,{opacity:0,},{opacity:1})
  
    setCounter(prevState=>type === 'next'?counter === offers.length-1 ? 0:++prevState:counter <= 0 ? offers.length-1:--prevState);
 
}