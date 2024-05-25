// REF: https://github.com/colinhacks/zod/discussions/839#discussioncomment-6488540
export const typedObjectKeys = <T extends Record<string, string>>(object: T) => {
    return Object.keys(object) as (keyof T)[];
}