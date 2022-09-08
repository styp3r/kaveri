import { supabase } from '../supabaseClient';

function ViewDS() {

    async function viewList() {
        const { data, error } = await supabase
        .from('2022')
        .select();
    }

    return (
        <div id="viewDSPage">
            <h1>View Daily Sheet</h1>
            {viewList()}
        </div>
    );
}

export default ViewDS;