import { allocate, Region } from "./memory";
import * as env from "./env";
export { allocate, deallocate } from "./memory";

export function instantiate(envPtr: usize, infoPtr: usize, msgPtr: usize): usize {
    // Uint8Array constructor uses __new and throws
    // new Uint8Array(250);
    let region = changetype<Region>(allocate(250));
    region.offset = changetype<usize>('{"ok":{"messages":[],"attributes":[],"events":[],"data":null}}');
    region.length = 250;
    let ptr = changetype<usize>(region);
    env.debug(ptr);
    return ptr;
}

export function execute(envPtr: usize, infoPtr: usize, msgPtr: usize): usize {
    return 0;
}

export function query(envPtr: usize, msgPtr: usize): usize {
    return 0;
}

export function interface_version_8(): void { }