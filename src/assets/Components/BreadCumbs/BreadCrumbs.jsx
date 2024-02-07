import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from "react-router-dom";

export function Breadcrumb() {

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Link
                    underline="hover"
                    color="text.primary"
                    href="/material-ui/react-breadcrumbs/"
                    aria-current="page"
                >
                    Breadcrumbs
                </Link>
            </Breadcrumbs>
        </div>
    )
}
