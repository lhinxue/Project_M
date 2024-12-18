import {
    Accordion,
    AccordionItem,
    Alert,
    Autocomplete,
    AutocompleteItem,
    Avatar,
    AvatarGroup,
    Badge,
    BreadcrumbItem,
    Breadcrumbs,
    Button,
    Calendar,
    Card,
    CardBody,
    Checkbox,
    CheckboxGroup,
    Chip,
    CircularProgress,
    DatePicker,
    DateRangePicker,
    Divider,
    Link,
    Listbox,
    ListboxItem,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Pagination,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Progress,
    ScrollShadow,
    Select,
    SelectItem,
    Skeleton,
    Slider,
    Switch,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tabs,
    Textarea,
    Tooltip,
    User,
} from "@nextui-org/react";

function Navigator() {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default Navigator;
