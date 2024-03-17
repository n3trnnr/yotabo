import React from "react";
import SvgIcons from "../../../UI/Svg/SvgIcons";
import Button from "../../../UI/Button/Button";

const SectionButtons: React.FC = () => {
    return (
        <>
            <Button buttonShape={'square'} styleName={'light-grey'} margin={'10px'}>
                <SvgIcons iconName={'boardView'} />
            </Button>

            <Button buttonShape={'square'} styleName={'light-grey'} margin={'10px'}>
                <SvgIcons iconName={'listView'} />
            </Button>

            <Button buttonShape={'rectangle'} styleName={'light-grey'} title={'Filter'} margin={'10px'}>
                <SvgIcons iconName={'filter'} />
            </Button>

            <Button buttonShape={'rectangle'} styleName={'blue'} title={'New project'} margin={'10px'}>
                <SvgIcons iconName={'addNewElement'} />
            </Button>
        </>
    );
}

export default SectionButtons;