import Image from "next/image"

const PageBG = ({img}) => {
  return (
    <div className="page_bg">
        <Image 
            src={img}
            fill
            alt="CRM"
        />
    </div>
  )
}

export default PageBG