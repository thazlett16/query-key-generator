import { describe, expectTypeOf, test } from 'vitest';
import { createMetaKeys } from './create-meta-keys';

describe('createMetaKeys', () => {
    test('createMetaKeys [employee] as const', () => {
        const module = createMetaKeys('module', ['employee'] as const);

        expectTypeOf(module).toMatchTypeOf<{
            employee: {
                module: 'employee';
            };
        }>();

        expectTypeOf(module.employee).toMatchTypeOf<{
            module: 'employee';
        }>();
    });

    test('createMetaKeys [employee, user] as const', () => {
        const module = createMetaKeys('module', ['employee', 'user'] as const);
        expectTypeOf(module).toMatchTypeOf<{
            employee: {
                module: 'employee';
            };
            user: {
                module: 'user';
            };
        }>();

        expectTypeOf(module.employee).toMatchTypeOf<{
            module: 'employee';
        }>();
    });

    test('createMetaKeys [employee]', () => {
        const module = createMetaKeys('module', ['employee']);

        expectTypeOf(module).toMatchTypeOf<{
            employee: {
                module: 'employee';
            };
        }>();

        expectTypeOf(module.employee).toMatchTypeOf<{
            module: 'employee';
        }>();
    });

    test('createMetaKeys [employee, user]', () => {
        const module = createMetaKeys('module', ['employee', 'user']);
        expectTypeOf(module).toMatchTypeOf<{
            employee: {
                module: 'employee';
            };
            user: {
                module: 'user';
            };
        }>();

        expectTypeOf(module.employee).toMatchTypeOf<{
            module: 'employee';
        }>();
    });
});
