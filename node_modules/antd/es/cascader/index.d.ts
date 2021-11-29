import * as React from 'react';
import type { CascaderProps as RcCascaderProps } from 'rc-cascader';
import type { FieldNames, DataNode } from 'rc-cascader/lib/interface';
import type { SizeType } from '../config-provider/SizeContext';
export declare type BasicDataNode = Omit<DataNode, 'label' | 'value' | 'children'>;
export declare type FieldNamesType = FieldNames;
export declare type FilledFieldNamesType = Required<FieldNamesType>;
export interface CascaderProps<DataNodeType> extends Omit<RcCascaderProps, 'checkable' | 'options'> {
    multiple?: boolean;
    size?: SizeType;
    bordered?: boolean;
    suffixIcon?: React.ReactNode;
    options?: DataNodeType[];
}
export interface CascaderRef {
    focus: () => void;
    blur: () => void;
}
declare const Cascader: (<DataNodeType extends DataNode | BasicDataNode = DataNode>(props: CascaderProps<DataNodeType> & {
    children?: React.ReactNode;
} & {
    ref?: React.Ref<CascaderRef> | undefined;
}) => React.ReactElement) & {
    displayName: string;
};
export default Cascader;
