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
import viteLogo from "/vite.svg";
import { useState } from "react";

import reactLogo from "./assets/react.svg";

import "./App.css";
import { useTheme } from "@nextui-org/use-theme";
import Navigator from "./components/Navigator";
import Background from "./components/Background";
import styled from "styled-components";

const animals = [
    { label: "Cat", key: "cat", description: "The second most popular pet in the world" },
    { label: "Dog", key: "dog", description: "The most popular pet in the world" },
    { label: "Elephant", key: "elephant", description: "The largest land animal" },
    { label: "Lion", key: "lion", description: "The king of the jungle" },
    { label: "Tiger", key: "tiger", description: "The largest cat species" },
    { label: "Giraffe", key: "giraffe", description: "The tallest land animal" },
    {
        label: "Dolphin",
        key: "dolphin",
        description: "A widely distributed and diverse group of aquatic mammals",
    },
    { label: "Penguin", key: "penguin", description: "A group of aquatic flightless birds" },
    { label: "Zebra", key: "zebra", description: "A several species of African equids" },
    {
        label: "Shark",
        key: "shark",
        description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
        label: "Whale",
        key: "whale",
        description: "Diverse group of fully aquatic placental marine mammals",
    },
    { label: "Otter", key: "otter", description: "A carnivorous mammal in the subfamily Lutrinae" },
    { label: "Crocodile", key: "crocodile", description: "A large semiaquatic reptile" },
];

const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function App() {
    const [count, setCount] = useState(0);
    const { theme, setTheme } = useTheme();
    function onclick() {
        setTheme("xxx");
    }

    return (
        <main className={`${theme} text-foreground bg-background`}>
            <Navigator />
            <Background
                input={{
                    landscape: {
                        src: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/f54aaca7603e2c81de7f59f2ba27ace5_1530189916137544025.mp4",
                        poster: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/f54aaca7603e2c81de7f59f2ba27ace5_1530189916137544025.mp4?x-oss-process=video/snapshot,t_1,f_jpg,m_fast",
                    },
                    portrait: {
                        src: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/8150ed7bf869ad11a7c68a8646a850cb_416164607738221361.mp4",
                        poster: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/8150ed7bf869ad11a7c68a8646a850cb_416164607738221361.mp4?x-oss-process=video/snapshot,t_1,f_jpg,m_fast",
                    },
                }}
            />
            {/* <span>
                <Card>
                    <Accordion>
                        <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Accordion 1">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem
                            key="2"
                            aria-label="Accordion 2"
                            subtitle={
                                <span>
                                    Press to expand <strong>key 2</strong>
                                </span>
                            }
                            title="Accordion 2"
                        >
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 3">
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </Card>
                <Card>
                    <Autocomplete className="max-w-xs" label="Select an animal">
                        {animals.map((animal) => (
                            <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>
                        ))}
                    </Autocomplete>
                    <Autocomplete
                        className="max-w-xs"
                        defaultItems={animals}
                        label="Favorite Animal"
                        placeholder="Search an animal"
                    >
                        {(item) => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                </Card>
                <Card>
                    <div className="flex flex-col w-full">
                        {["default", "primary", "secondary", "success", "warning", "danger"].map((color) => (
                            <div key={color} className="w-full flex items-center my-3">
                                <Alert color={color} title={`This is a ${color} alert`} />
                            </div>
                        ))}
                    </div>
                </Card>
                <Card>
                    <div className="flex gap-4 items-center">
                        <Avatar className="w-6 h-6 text-tiny" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar size="lg" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <Avatar
                            className="w-20 h-20 text-large"
                            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                        />
                    </div>
                    <AvatarGroup isBordered>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                    </AvatarGroup>
                </Card>
                <Card>
                    <div className="flex gap-3 items-center">
                        <Badge color="primary" content="5" size="sm">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        </Badge>
                        <Badge color="primary" content="5" size="md">
                            <Avatar radius="md" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
                        </Badge>
                        <Badge color="primary" content="5" size="lg">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                    </div>
                </Card>
                <Card>
                    <Breadcrumbs>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Music</BreadcrumbItem>
                        <BreadcrumbItem>Artist</BreadcrumbItem>
                        <BreadcrumbItem>Album</BreadcrumbItem>
                        <BreadcrumbItem>Song</BreadcrumbItem>
                    </Breadcrumbs>
                </Card>
                <Card>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button color="primary" variant="solid">
                            Solid
                        </Button>
                        <Button color="primary" variant="faded">
                            Faded
                        </Button>
                        <Button color="primary" variant="bordered">
                            Bordered
                        </Button>
                        <Button color="primary" variant="light">
                            Light
                        </Button>
                        <Button color="primary" variant="flat">
                            Flat
                        </Button>
                        <Button color="primary" variant="ghost">
                            Ghost
                        </Button>
                        <Button color="primary" variant="shadow">
                            Shadow
                        </Button>
                    </div>
                </Card>
                <Card>
                    <Calendar aria-label="Date (No Selection)" />
                </Card>
                <Card>
                    <CheckboxGroup defaultValue={["buenos-aires", "london"]} label="Select cities">
                        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                        <Checkbox value="sydney">Sydney</Checkbox>
                        <Checkbox value="san-francisco">San Francisco</Checkbox>
                        <Checkbox value="london">London</Checkbox>
                        <Checkbox value="tokyo">Tokyo</Checkbox>
                    </CheckboxGroup>
                </Card>
                <Card>
                    <div className="flex gap-4">
                        <Chip color="warning" variant="solid">
                            Solid
                        </Chip>
                        <Chip color="warning" variant="bordered">
                            Bordered
                        </Chip>
                        <Chip color="warning" variant="light">
                            Light
                        </Chip>
                        <Chip color="warning" variant="flat">
                            Flat
                        </Chip>
                        <Chip color="warning" variant="faded">
                            Faded
                        </Chip>
                        <Chip color="warning" variant="shadow">
                            Shadow
                        </Chip>
                        <Chip color="warning" variant="dot">
                            Dot
                        </Chip>
                    </div>
                </Card>
                <Card>
                    {" "}
                    <div className="flex gap-4">
                        <CircularProgress aria-label="Loading..." size="sm" />
                        <CircularProgress aria-label="Loading..." size="md" />
                        <CircularProgress aria-label="Loading..." size="lg" />
                    </div>
                </Card>
                <Card>
                    <DatePicker className="max-w-[284px]" label="Birth date" />
                    <DateRangePicker className="max-w-xs" label="Stay duration" />
                </Card>
                <Card>
                    <div className="max-w-md">
                        <div className="space-y-1">
                            <h4 className="text-medium font-medium">NextUI Components</h4>
                            <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
                        </div>
                        <Divider className="my-4" />
                        <div className="flex h-5 items-center space-x-4 text-small">
                            <div>Blog</div>
                            <Divider orientation="vertical" />
                            <div>Docs</div>
                            <Divider orientation="vertical" />
                            <div>Source</div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
                        <ListboxItem key="new">New file</ListboxItem>
                        <ListboxItem key="copy">Copy link</ListboxItem>
                        <ListboxItem key="edit">Edit file</ListboxItem>
                        <ListboxItem key="delete" className="text-danger" color="danger">
                            Delete file
                        </ListboxItem>
                    </Listbox>
                </Card>
                <Card>
                    <Pagination initialPage={1} total={10} />
                </Card>
                <Card>
                    <Popover placement="right">
                        <PopoverTrigger>
                            <Button>Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </Card>
                <Card>
                    <Progress isIndeterminate aria-label="Loading..." className="max-w-md" size="sm" />
                </Card>
                <Card>
                    <ScrollShadow className="w-[300px] h-[400px]" size={100} hideScrollBar>
                        <p>
                            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
                            consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco
                            minim nostrud elit officia tempor esse quis.
                        </p>
                        <p>
                            Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor
                            cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
                            quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                            incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                            deserunt nostrud ad veniam.
                        </p>
                        <p>
                            Est velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur
                            ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat.
                            Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo
                            et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.
                        </p>
                        <p>
                            Incididunt duis commodo mollit esse veniam non exercitation dolore occaecat ea nostrud
                            laboris. Adipisicing occaecat fugiat fugiat irure fugiat in magna non consectetur proident
                            fugiat. Commodo magna et aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim ex.
                            Est eiusmod commodo occaecat consequat laboris est do duis. Enim incididunt non culpa velit
                            quis aute in elit magna ullamco in consequat ex proident.
                        </p>
                    </ScrollShadow>
                </Card>
                <Card>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Select className="max-w-xs" label="Select an animal">
                            {animals.map((animal) => (
                                <SelectItem key={animal.key}>{animal.label}</SelectItem>
                            ))}
                        </Select>
                        <Select className="max-w-xs" label="Favorite Animal" placeholder="Select an animal">
                            {animals.map((animal) => (
                                <SelectItem key={animal.key}>{animal.label}</SelectItem>
                            ))}
                        </Select>
                    </div>
                </Card>
                <Card className="w-[200px] space-y-5 p-4" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg bg-default-300" />
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                        </Skeleton>
                    </div>
                </Card>
                <Card>
                    <Slider
                        className="max-w-md"
                        defaultValue={0.4}
                        label="Temperature"
                        maxValue={1}
                        minValue={0}
                        step={0.01}
                    />
                </Card>
                <Card>
                    <Switch defaultSelected>Automatic updates</Switch>
                </Card>
                <Card>
                    <Table aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn>NAME</TableColumn>
                            <TableColumn>ROLE</TableColumn>
                            <TableColumn>STATUS</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Zoey Lang</TableCell>
                                <TableCell>Technical Lead</TableCell>
                                <TableCell>Paused</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Jane Fisher</TableCell>
                                <TableCell>Senior Developer</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>William Howard</TableCell>
                                <TableCell>Community Manager</TableCell>
                                <TableCell>Vacation</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
                <Card>
                    <Tabs aria-label="Options">
                        <Tab key="photos" title="Photos">
                            <Card>
                                <CardBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="music" title="Music">
                            <Card>
                                <CardBody>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="videos" title="Videos">
                            <Card>
                                <CardBody>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </Card>
                <Card>
                    <Textarea className="max-w-xs" label="Description" placeholder="Enter your description" />
                </Card>
                <Card>
                    <Tooltip content="I am a tooltip" showArrow={true}>
                        <Button>Hover me</Button>
                    </Tooltip>
                </Card>
                <Card>
                    <User
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                        }}
                        description="Product Designer"
                        name="Jane Doe"
                    />
                </Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </span> */}
        </main>
    );
}

export default App;
