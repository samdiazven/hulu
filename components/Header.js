import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
	HomeIcon,
	BadgeCheckIcon,
	CollectionIcon,
	LightningBoltIcon,
	UserIcon,
	SearchIcon,
} from "@heroicons/react/outline";
export default function Header() {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<HeaderIcon title="Home" Icon={HomeIcon} />
				<HeaderIcon title="trending" Icon={LightningBoltIcon} />
				<HeaderIcon title="verified" Icon={BadgeCheckIcon} />
				<HeaderIcon title="collections" Icon={CollectionIcon} />
				<HeaderIcon title="search" Icon={SearchIcon} />
				<HeaderIcon title="account" Icon={UserIcon} />
			</div>
			<Image
				src="https://links.papareact.com/ua6"
				className="object-contain"
				width={200}
				height={100}
			/>
		</header>
	);
}
