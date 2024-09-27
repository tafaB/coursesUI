export default function CheckBox({ inputLabel }) {
    return (
        <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">{inputLabel}</span>
                <input type="checkbox" className="checkbox" />
            </label>
        </div>
    )
}