import { describe, expect, test } from 'vitest';

import { createMetaKeys } from './create-meta-keys';

describe('createMetaKeys', () => {
    test('createMetaKeys [employee]', () => {
        const module = createMetaKeys('module', ['employee']);

        expect(module).toEqual({
            employee: {
                module: 'employee',
            },
        });

        expect(module.employee).toEqual({
            module: 'employee',
        });

        expect(module.employee.module).toEqual('employee');
    });

    test('createMetaKeys [employee, user]', () => {
        const module = createMetaKeys('module', ['employee', 'user']);

        expect(module).toEqual({
            employee: {
                module: 'employee',
            },
            user: {
                module: 'user',
            },
        });

        expect(module.employee).toEqual({
            module: 'employee',
        });

        expect(module.employee.module).toEqual('employee');

        expect(module.user).toEqual({
            module: 'user',
        });

        expect(module.user.module).toEqual('user');
    });

    test('createMetaKeys [employee] as const', () => {
        const module = createMetaKeys('module', ['employee'] as const);

        expect(module).toEqual({
            employee: {
                module: 'employee',
            },
        });

        expect(module.employee).toEqual({
            module: 'employee',
        });

        expect(module.employee.module).toEqual('employee');
    });

    test('createMetaKeys [employee, user] as const', () => {
        const module = createMetaKeys('module', ['employee', 'user'] as const);

        expect(module).toEqual({
            employee: {
                module: 'employee',
            },
            user: {
                module: 'user',
            },
        });

        expect(module.employee).toEqual({
            module: 'employee',
        });

        expect(module.employee.module).toEqual('employee');

        expect(module.user).toEqual({
            module: 'user',
        });

        expect(module.user.module).toEqual('user');
    });
});
