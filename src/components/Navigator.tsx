import {
    Badge,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    Link,
    Listbox,
    ListboxItem,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Tab,
    Tabs,
    useDisclosure,
} from "@nextui-org/react";
import { useSwipeable } from "react-swipeable";

import Lucid from "./Lucide";

const menuItems = [
    { key: "story", title: "Stories" },
    { key: "char", title: "Characters" },
    { key: "anime", title: "Official Anime" },
];

function Navigator() {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const onSwipLeft = useSwipeable({ onSwipedLeft: () => onClose() });
    const onSwipRight = useSwipeable({ onSwipedRight: () => onOpen() });
    return (
        <>
            <Navbar {...onSwipRight} classNames={{ wrapper: "sm:px-10 px-4" }}>
                <NavbarBrand className="flex gap-3">
                    <Button className="sm:hidden flex" variant="light" isIconOnly onPress={onOpen}>
                        <Lucid.Menu />
                    </Button>
                    <p className="font-bold text-inherit">Honkai: Star Rail</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex" justify="end">
                    <Tabs variant="underlined">
                        {menuItems.map((m) => (
                            <Tab {...m} />
                        ))}
                    </Tabs>
                </NavbarContent>
            </Navbar>

            <Drawer
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="sm"
                radius="none"
                placement="left"
                backdrop="blur"
                hideCloseButton
                classNames={{ base: "max-w-80pc" }}
                closeButton
            >
                <DrawerContent>
                    <DrawerBody {...onSwipLeft} className="px-4 py-0">
                        <div className="flex gap-3 h-16 items-center">
                            <Button className="sm:hidden flex" variant="light" isIconOnly onPress={onClose}>
                                <Lucid.Menu />
                            </Button>
                            <p className="font-bold text-inherit">Honkai: Star Rail</p>
                        </div>
                        <Listbox onAction={(key) => alert(key)}>
                            {menuItems.map((m) => (
                                <ListboxItem key={m.key}>{m.title}</ListboxItem>
                            ))}
                        </Listbox>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Navigator;
