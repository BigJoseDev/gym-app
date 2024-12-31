import Logo from "@/assets/Logo.png"



const footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
        <img src={Logo} alt="" />
        <p className="my-5 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, modi facilis. Nesciunt ea dolorem accusamus itaque provident obcaecati repellendus, aliquid harum culpa non a perspiciatis?</p>
        <p>Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 ">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p className="my-5">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 ">
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p className="my-5">(333)425-6876</p>

        </div>
        </div>
    </footer>
  )
}

export default footer