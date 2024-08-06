'use client'
const RequestInfo = (props) => {
    return (
        <div class="bg-white mt-2 pb-1">
            <div class="m-2 border-b">依頼情報</div>
            <div>
                <div class="flex m-2"><div class="w-1/6">依頼番号</div><input type={"text"} value={props.request_id} class="bg-gray-200 border-gray-300 border"/></div>
                <div class="flex m-2"><div class="w-1/6">件名</div><input type={"text"} value={props.subject} class="bg-gray-200 border-gray-300 border w-4/5"/></div>
                <div class="flex m-2"><div class="w-1/6">分類</div><input type={"text"} value={props.request_category_name} class="bg-gray-200 border-gray-300 border w-4/5"/></div>
                <div class="flex m-2"><div class="w-1/6">種類</div><input type={"text"} value={props.request_type_name} class="bg-gray-200 border-gray-300 border w-4/5"/></div>
                <div class="flex m-2"><div class="w-1/6">依頼日</div><input type={"text"} value={props.request_date} class="bg-gray-200 border-gray-300 border"/></div>
                <div class="flex m-2">
                    <div class="w-1/6 flex items-center">
                        <div class="w-full">完了予定日</div>
                        <div class="text-xs text-white bg-red-500 rounded-sm h-fit w-8 mr-4">必須</div>
                    </div>
                    <input type={"text"} value={props.expected_completion_date} class="border-gray-300 border"/>
                </div>
                <div class="flex m-2"><div class="w-1/6">完了日</div><input type={"text"} value={props.actual_completion_date} class="bg-gray-200 border-gray-300 border"/></div>
                <div class="flex m-2 items-center"><div class="w-1/6">至急</div><input type="checkbox" /><label class="ml-2">あり</label></div>
                <div class="flex m-2"><div class="w-1/6">依頼所属</div><input type={"text"} value={props.section_name_large_kanji} class="bg-gray-200 border-gray-300 border w-4/5"/></div>
                <div class="flex m-2"><div class="w-1/6">依頼者</div><input type={"text"} value={props.name_kanji_requester} class="bg-gray-200 border-gray-300 border w-4/5"/></div>
                <div class="flex m-2">
                    <div class="w-1/6">同報者</div>
                    <div class="border w-4/5 h-20 flex flex-col">
                        <div class="flex justify-end"><button class="border border-blue-300 text-xs text-blue-300 m-1">追加</button></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RequestInfo;