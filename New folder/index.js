chrome.browserAction.onClicked.addListener(function (s) {chrome.tabs.create({'url': chrome.extension.getURL('index.html')}, function (t) {});});

var countSuccess = 0
var countFail = 0
async function main() {

    let phones = document.getElementById("phoneuwu").value
    let message = document.getElementById("messageuwu").value

    let success = document.getElementById("success")
    let fail = document.getElementById("fail")

    if (phones.length !== 0) {
        phones = phones.trim().split(/\n/g)
    }

    if (phones.length !== 0 && message.length !== 0) {
        for (let phone of phones) {
            let res = await fetch(`https://www.thsms.com/api/rest?username=ua005&password=ua0001&method=send&from=Privileged&to=${phone}&message=${message}`).then(res=>res.text()).catch(c="c")
            if (res.includes("success")) {
                countSuccess += 1
                success.innerHTML = `สำเร็จ: ${countSuccess}`
            } else {
                countFail += 1
                fail.innerHTML = `สำเร็จ: ${countFail}`
            }
        }
        Swal.fire(
            `สำเร็จ`,
            'ส่งสำเร็จแล้วครับ',
            'success'
        )
    } else {
        Swal.fire(
            'ผิดพลาด',
            'โปรดใส่ให้เรียบร้อย',
            'error'
        )
    }
}

window.onload = function() {
    document.getElementById("sharkky").innerHTML = `
    <div class="container mx-auto p-3">
            <!--navbar-->
            <nav class="bg-white px-2 sm:px-4 py-3.5 rounded dark:bg-gray-800">
                <div class="container w-full md:w-[960px] flex flex-wrap justify-between items-center mx-auto">
                   <a class="flex items-center" href="/"><span class="self-center text-2xl font-semibold whitespace-nowrap text-blue-400 dark:text-white">Sharkky</span></a><button class="inline-flex items-center p-2 ml-3 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"><i class="fas fa-align-justify"></i></button>
                   <div class="hidden w-full md:block md:w-auto">
                      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
                         <li>
                            <a class="block py-2 pr-4 pl-3 text-white font-semibold bg-blue-500 rounded md:bg-transparent md:text-blue-400 md:hover:text-blue-500 md:p-0 dark:text-white cursor-pointer">
                               <i class="fas fa-home"></i>&nbsp;<!-- -->Home<!-- -->
                            </a>
                         </li>
                         <li>
                            <a class="block py-2 pr-4 pl-3 text-gray-600 border-b border-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
                               <i class="fas fa-store"></i>&nbsp;<!-- -->Products<!-- -->
                            </a>
                         </li>
                      </ul>
                   </div>
                </div>
             </nav>
            <!-- header -->
            <div class="text-center p-3">
                <h1 class="text-4xl text-white underline">sharkky</h1>
            </div>
            <!-- header -->
        
            <div class="w-full md:w-2/3 mx-auto p-2 border rounded-lg border-purple-300 bg-gray-800 border-4">      
                <div class="grid grid-cols-2 gap-2 text-[#ffffff]">
                    <div id="phones" class="mx-auto text-black">
                        <p class="text-white text-2xl text-center">เบอร์</p>
                        <textarea id="phoneuwu" cols="47" rows="15" class="text-gray-200 bg-gray-600 rounded-lg"></textarea>
                    </div>
                    <div id="message" class="mx-auto text-black">
                        <p class="text-white text-2xl text-center">ข้อความ</p>
                        <textarea id="messageuwu" cols="47" rows="15" class="text-gray-200 bg-gray-600 rounded-lg"></textarea>
                    </div>
                </div>
        
                <div class="flex justify-start ml-12">
                    <p class="text-white text-lg">
                        <br>❗️โดย 1 เครดิตจะมีรายละเอียดดังนี้<br>
                        ✅ ภาษาไทย พิมพ์ได้ 70 ตัวอักษร รวมพยัญชนะ สระ และช่องว่าง<br>
                        ✅ ภาษาอังกฤษ พิมพ์ได้ 160 ตัวอักษร รวมช่องว่าง<br>
                        ✅ ภาษาไทยรวมกับภาษาอังกฤษ พิมพ์ได้ 70 ตัวอักษร รวมช่องว่าง และอักขระพิเศษ
                        <br><br>
                    </p>
                </div>
        
                <div class="flex justify-center">
                    <button id="senduwu" class="p-1 text-white text-lg bg-blue-600 hover:bg-slate-300 hover:text-black shadow-lg hover:duration-300 duration-300 rounded-lg">ส่งขอความ</button>
                    <a id="success" class="ml-2 p-1 text-white text-lg bg-green-600 rounded-lg">สำเร็จ: 0</a>
                    <a id="fail" class="ml-2 p-1 text-white text-lg bg-red-500 rounded-lg">ไม่สำเร็จ: 0</a>
                </div>
            </div>
        </div>
        
        <footer class="bg-white dark:bg-gray-800">
            <div class="container mx-auto sm:p-12">
                <div class="grid md:grid-cols-1 sm:flex justify-center">
                    <div class="w-[500px] my-4 sm:my-0">
                        <div class="mb-2">
                            <h1 class="text-2xl text-blue-400 dark:text-white font-semibold">ติดต่อเรา</h1>
                        </div>
                        <div class="text-blue-400 text-2xl">
                            <i class="fa-brands fa-facebook text-blue-500"></i><a class="text-white hover:underline" href="https://www.facebook.com/sharkkykub/">  Facebook</a>
                            <br><i class="fa-brands fa-youtube text-red-500"></i><a class="text-white hover:underline" href="https://www.facebook.com/sharkkykub/"> Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `
    document.getElementById("senduwu").addEventListener("click", main)
}