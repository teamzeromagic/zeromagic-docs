import Check from "@site/static/img/check-mark.png";
import Cross from "@site/static/img/cross.png";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function Comparison(): JSX.Element {
  return (
    <div className="comparison-container">
      <div
        className="max-w-8xl mx-auto"
        style={{
          maxWidth: "90rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* <p className="mt-12 text-2xl lg:text-5xl font-bold text-black tracking-tight leading-none">
                   
                  </p>  */}
        <Heading as="h1">
          {" "}
          Why <span style={{ color: "#009688" }}>ZeroMagic?</span> No code, just
          magic!
        </Heading>
      </div>
      <br />
      <br />

      <div className="max-w-8xl mx-auto">
        <div>
          <div>
            <div>
              <table>
                <thead style={{ backgroundColor: "#374151", color: "white" }}>
                  <tr>
                    <th scope="col">With Zeromagic</th>
                    <th scope="col">Without Zeromagic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-10 font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Check} alt="check" />
                        <span>Quick setup</span>
                      </div>
                    </td>

                    <td className="px-10  font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Cross} alt="cross" />
                        <span>Longer setup</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-10  font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Check} alt="check" />
                        <span>No installations</span>
                      </div>
                    </td>

                    <td className="px-10  font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Cross} alt="cross" />
                        <span>Necessary installations</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-10 font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Check} alt="check" />
                        <span>Design the connection</span>
                      </div>
                    </td>

                    <td className="px-10 font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Cross} alt="cross" />
                        <span>Complicated design</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-10 font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Check} alt="check" />
                        <span>Build with ease</span>
                      </div>
                    </td>

                    <td className="px-10 font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Cross} alt="cross" />
                        <span>Complex coding</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-10 font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Check} alt="check" />
                        <span>Effortless Deployment</span>
                      </div>
                    </td>

                    <td className="px-10 font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Cross} alt="cross" />
                        <span>Deployment dilemma</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-10 font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Check} alt="check" />
                        <span>Minutes, Not Days</span>
                      </div>
                    </td>

                    <td className="px-10 font-semibold py-4">
                      <div className="flex space-x-2">
                        <img src={Cross} alt="cross" />
                        <span>Takes days to complete</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
