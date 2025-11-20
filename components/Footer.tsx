/**
 * The Footer component renders the bottom section of the website.
 *
 * It displays the copyright notice with the current year.
 *
 * @returns A React functional component for the footer.
 */
export default function Footer() {
    return (
        <footer className="py-8 bg-white border-t border-border">
            <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
                <p>&copy; {new Date().getFullYear()} Jean Chavez. All rights reserved.</p>
            </div>
        </footer>
    );
}
