import Link from "next/link"
import { Button, ButtonGroup } from "../common/Button"
import { BiAddToQueue } from 'react-icons/bi'
import { FiArrowUpRight } from "react-icons/fi"

const Banner = () => {
  return (
    <section className="section_">
        <div className="container_">
            <div className="banner_title">
                <h1>Hi, <span>User</span> Welcome Back</h1>
                <p>Bringing companies and customers together, anywhere</p>
                <ButtonGroup>
                    <Button 
                    title='Add Client'
                    type='button'
                    >
                        <BiAddToQueue />
                    </Button>
                </ButtonGroup>
            </div>

            <div className="banner_widget">
                <div className="item_">
                    <Link href={'/'} className="link_">
                        <div className="no_">12</div>
                        <div className="name_">Clients</div>

                        <div className="b_wrp">
                            <div className="icon_">
                                <FiArrowUpRight />
                            </div>
                        </div>

                    </Link>
                </div>
                <div className="item_">
                    <Link href={'/'} className="link_">
                        <div className="no_">54</div>
                        <div className="name_">Invoices</div>

                        <div className="b_wrp">
                            <div className="icon_">
                                <FiArrowUpRight />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="item_">
                    <Link href={'/'} className="link_">
                        <div className="no_">67</div>
                        <div className="name_">Receipt</div>

                        <div className="b_wrp">
                            <div className="icon_">
                                <FiArrowUpRight />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="item_">
                    <Link href={'/'} className="link_">
                        <div className="no_">25</div>
                        <div className="name_">Quotation</div>

                        <div className="b_wrp">
                            <div className="icon_">
                                <FiArrowUpRight />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner