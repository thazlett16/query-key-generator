type MetaKey = Readonly<string>;

type MetaValues = Readonly<[string, ...string[]]>;

type MetaFactoryResultItem<
    Key extends MetaValues[number],
    Value extends MetaKey,
> = Record<Key, Value>;

// type MetaFactoryResult<Key extends MetaKey, Values extends MetaValues> = Record<
//     Values[number],
//     MetaFactoryResultItem<Key, Values[number]>
// >;

type MetaFactoryResult<Key extends MetaKey, Values extends MetaValues> = {
    [V in Values[number]]: MetaFactoryResultItem<Key, V>;
};

// type MetaFactoryResult<Key extends MetaKey, Values extends MetaValues> = {
//     [V in Values[number]]: {
//         [K in Key]: V;
//     };
// };

export function createMetaKeys<
    const Key extends MetaKey,
    const Values extends MetaValues,
>(metaKey: Key, metaValues: Values): MetaFactoryResult<Key, Values> {
    return {
        ...metaValues.reduce(
            (metaObj, metaValue) => {
                return {
                    ...metaObj,
                    [metaValue]: {
                        [metaKey]: metaValue,
                    },
                } as const;
            },
            {} as MetaFactoryResult<Key, Values>,
        ),
    };
}

// const stringArray: readonly ["value1", "value2", "value3"];
// type StringFromArray = typeof stringArray[number];
