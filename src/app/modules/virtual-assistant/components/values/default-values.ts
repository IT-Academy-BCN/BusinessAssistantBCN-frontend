/**
 * Values ​​used by default in the component constructor. They are overwritten if we use an input value.
 */
export class DefaultValues {

    // BASE-CONTAINER COMPONENT
    public static readonly BaseContainerHeight: string = "395px";
    public static readonly BaseContainerInnerPadding: string = "10px";
    public static readonly BaseContainerBackgroundColor: string = "white";
    public static readonly BaseContainerElevationInactive: number = 4;
    public static readonly BaseContainerElevationActive: number = 8;
    public static readonly BaseContainerIsActive: boolean = false;

    // VIRTUAL-ASSISTANT-BUTTONS-CONTAINER COMPONENT
    public static readonly VAButtonsContainerBackgroundColor: string = "white";
    public static readonly VAButtonsContainerGap: string = "15px";
    public static readonly VAButtonsContainerPadding: string = "15px";
    public static readonly VAButtonsContainerMainButtonText: string = "Main Button";
    public static readonly VAButtonsContainerMainButtonColor: string = "primary";
    public static readonly VAButtonsContainerMainButtonDisabled: boolean = false;
    public static readonly VAButtonsContainerSecondaryButtonText: string = "Secondary Button";
    public static readonly VAButtonsContainerSecondaryButtonColor: string = "";
    public static readonly VAButtonsContainerSecondaryButtonDisabled: boolean = false;
}
