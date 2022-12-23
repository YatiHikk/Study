
const HeaderMenuLinkList = () => {

    const menuMas = [{title: "Home",
        link: "Кокаято сылка"},
        {title: "Product",
        link: "Кокаято сылка"},
        {title: "Pricing",
        link: "Кокаято сылка"},
        {title: "About",
        link: "Кокаято сылка"},
        {title: "Contact",
        link: "Кокаято сылка"}]

    return (<>
        {menuMas.map(({title, link})=>(
            <a href={link} key={title}>{title}</a>
        )) }
        </>)
}

export default HeaderMenuLinkList;