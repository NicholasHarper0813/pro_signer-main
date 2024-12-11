import checkCircle from '$lib/components/svgs/check-circle.svg?raw';
import check from '$lib/components/svgs/check.svg?raw';
import info from '$lib/components/svgs/info.svg?raw';
import logoLarge from '$lib/components/svgs/logo-large.svg?raw';
import selectArrow from '$lib/components/svgs/select-arrow.svg?raw';
import chats from '$lib/components/svgs/chats.svg?raw';
import wiseStamp from '$lib/components/svgs/wise-stump.svg?raw';
import ig from '$lib/components/svgs/ig.svg?raw';
import tiktok from '$lib/components/svgs/tiktok.svg?raw';
import x from '$lib/components/svgs/x.svg?raw';
import youtube from '$lib/components/svgs/youtube.svg?raw';
import linkedin from '$lib/components/svgs/linkedin.svg?raw';
import fb from '$lib/components/svgs/fb.svg?raw';
import emailmanager from '$lib/components/svgs/email-sign-manager.svg?raw';
import emailsign from '$lib/components/svgs/email-sign.svg?raw';
 
//URLs
// import womanAvatarUrl from '$lib/svgs/avtar-woman.svg?url';
 

export const Icons = {
	 
	checkCircle,
	check,
	info,
	logoLarge,
	selectArrow,
	chats,
	wiseStamp,
	ig,
	tiktok,
	x,
	youtube,
	linkedin,
	fb,
	emailmanager,
	emailsign,
	 
	 
}
export function getIconByName(name: string) {
	let key = name as keyof typeof Icons;
	return Icons[key] as string;
}
