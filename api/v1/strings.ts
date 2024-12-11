import { Utils } from '../../utils';

/**
 * @param output The string to convert
 * @param id The identifier of the output, if any
 * @returns The string in Title Case
 */
export async function toTitleCaseFromAPI(output: string, id?: string) {
    return Utils.toTitleCase(output, id);
}
