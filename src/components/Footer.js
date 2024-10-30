export default function Footer() {
    var currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="">
                <p>Copyright © {currentYear}</p>
            </div>
        </footer>
    )
}